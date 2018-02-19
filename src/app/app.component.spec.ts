import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FaFileIconPipe } from './pipes/fa-file-icon.pipe';
import { FileInfoComponent } from './file-info/file-info.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { NgUploaderModule } from 'ngx-uploader';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgUploaderModule
      ],
      declarations: [
        AppComponent,
        FileUploaderComponent,
        UploadFormComponent,
        ProgressbarComponent,
        FileInfoComponent,
        FaFileIconPipe
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ipfs'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ipfs');
  }));
  it(`should render a div tag with the class 'upload-wrapper'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.upload-wrapper')).toBeDefined();
  }));
});
