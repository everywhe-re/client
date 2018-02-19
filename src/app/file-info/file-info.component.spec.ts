import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInfoComponent } from './file-info.component';
import { FaFileIconPipe } from '../pipes/fa-file-icon.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('FileInfoComponent', () => {
  let component: FileInfoComponent;
  let fixture: ComponentFixture<FileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FileInfoComponent,
        FaFileIconPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
