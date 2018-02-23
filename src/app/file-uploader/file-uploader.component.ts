import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from '../providers/crypto.service';

@Component({
  selector: 'ipfs-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

  _uploading: boolean;
  progress = 0;
  speed: string = '0 B/s';


  constructor(public _router: Router, public _cryptoService: CryptoService) {
  }


  onFileSelect(file: File) {
    const start = new Date();

    this._cryptoService.encryptFile(file)
      .subscribe(
        (encrypted: ArrayBuffer) => {
          const end = new Date();

          console.log('Encryption took ' + (end.getTime() - start.getTime()) +  'ms');
        }
      );
  }

}
