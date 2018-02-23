import { Injectable } from '@angular/core';
import { FileUploadRequest } from '../models/file-upload-request';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class FileUploadService {

  _headers: HttpHeaders;


  constructor(public _http: HttpClient) {
    this._headers = new HttpHeaders();
    this._headers = this._headers.set('Content-Type', 'multipart/form-data');
  }


  uploadFile(request: FileUploadRequest, progress?: (loaded, total) => void): Observable<any> {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      const formData = new FormData();
      formData.append('file', request.file, request.file.name);

      this._http.request(new HttpRequest(
        'POST',
        'URL',
        formData,
        {
          reportProgress: true,
          headers: this._headers
        }
      )).subscribe(
        (event: any) => {
          // Call progress function
          if (event.type === HttpEventType.UploadProgress && progress) {
            progress(event.loaded, event.total);
          }

          // Upload has finished
          if (event.type === HttpEventType.Response) {
            subscriber.next(event.body);
            subscriber.complete();
          }
        },
        (error: any) => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );
    });
  }

}
