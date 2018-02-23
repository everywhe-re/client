import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { FileInfoComponent } from './file-info/file-info.component';
import { FaFileIconPipe } from './pipes/fa-file-icon.pipe';
import { FileUploadService } from './providers/file-upload.service';
import { FileInputComponent } from './file-input/file-input.component';
import { CryptoService } from './providers/crypto.service';
import { WebWorkerService } from './providers/web-worker.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    UploadFormComponent,
    ProgressbarComponent,
    FileInfoComponent,
    FaFileIconPipe,
    FileInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    FileUploadService,
    CryptoService,
    WebWorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
