import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ipfs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {

  selectedFile: File;

  @Output() selectFile = new EventEmitter<File>();


  constructor() { }


  handleFileInput(files: FileList) {
    // No file has been selected
    if (files.length === 0) {
      this.selectedFile = null;
      return;
    }

    const file = files.item(0);

    this.selectedFile = file;

    this.selectFile.emit(file);
  }


  get selectedFileName() {
    if (this.selectedFile) {
      return this.selectedFile.name;
    }

    return 'No file selected';
  }

}
