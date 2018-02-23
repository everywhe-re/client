import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { WebWorkerService } from './web-worker.service';
import { environment } from '../../environments/environment';

declare const window: Window;

@Injectable()
export class CryptoService {

  constructor(public webWorkerService: WebWorkerService) { }


  /**
   * Encrypt a file
   * @param {File} file The file to encrypt
   * @returns The encrypted data
   */
  encryptFile(file: File): Observable<ArrayBuffer> {
    return new Observable<ArrayBuffer>((subscriber: Subscriber<ArrayBuffer>) => {
      const worker = this.webWorkerService.runTask(this.encryptionWorkerTask);

      worker.onmessage = function(this, ev) {
        subscriber.next(null);
        subscriber.complete();
      };

      this.readFile(file)
        .subscribe(
          (bytes: ArrayBuffer) => {
            worker.postMessage({ bytes: new Uint8Array(bytes), options: environment.crypto });
          },
          (error: any) => {
            subscriber.error(error);
          });
    });
  }

  /**
   * Read a file into an ArrayBuffer
   * @param {File} file The file to read
   * @returns Binary representation of the file
   */
  readFile(file: File): Observable<ArrayBuffer> {
    return new Observable<ArrayBuffer>((subscriber: Subscriber<ArrayBuffer>) => {
      // Read file
      const fileReader = new FileReader();

      fileReader.onload = () => {
        console.log('Result: ' + JSON.stringify(fileReader.result));

        subscriber.next(fileReader.result);
        subscriber.complete();
      };

      fileReader.onerror = () => {
        subscriber.error();
      };

      fileReader.readAsArrayBuffer(file);
    });
  }

  /**
   * Web Worker function that encrypts a {@link Uint8Array} using a random key and IV
   */
  encryptionWorkerTask() {
    self.onmessage = (ev: MessageEvent) => {
      // Import aes-js
      importScripts('https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js');

      // Get input bytes from message
      const bytes: Uint8Array = ev.data.bytes;

      // Generate random key
      let key = new Uint8Array(ev.data.options.keyLength);
      self.crypto.getRandomValues(key);

      // Generate random IV
      let iv = new Uint8Array(ev.data.options.ivLength);
      self.crypto.getRandomValues(iv);

      // Calculate required padding
      let padding = 0;
      if (bytes.length % ev.data.options.blockSize !== 0) {
        padding = ev.data.options.blockSize - (bytes.length % ev.data.options.blockSize);
      }
      console.log('Content size of ' + bytes.length + ' bytes requires padding of ' + padding + ' bytes.');

      // Add padding to bytes
      const data = new Uint8Array(bytes.length + padding);
      for (let i = 0; i < bytes.length; i++) {
        data[i] = bytes[i];
      }

      // Choose mode
      const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

      // Encrypt data
      const encrypted = aesCbc.encrypt(data);

      self.postMessage({ key, iv, encrypted });
    };
  }

}
