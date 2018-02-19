import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderComponent } from './file-uploader.component';
import { NgUploaderModule } from 'ngx-uploader';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FileUploaderComponent', () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgUploaderModule,
        RouterTestingModule
      ],
      declarations: [
        FileUploaderComponent,
        ProgressbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
