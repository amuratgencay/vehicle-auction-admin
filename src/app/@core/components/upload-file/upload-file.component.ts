import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Output() public fileUploaded = new EventEmitter();
  @Input() public multiple = true;
  constructor() {
    this.value = [];
    this.uploadFile = this.uploadFile.bind(this);
  }

  ngOnInit() {
  }

  private _value: any[];
  @Input()
  public get value(): any[] {
    return this._value;
  }
  public set value(v: any[]) {
    this._value = v;
    this.valueChange.next(v);
  }

  @Output() public valueChange = new EventEmitter();
  uploadedFiles: any = [];

  uploadFile(event: FileList) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      var reader = new FileReader();
      let file = { name: element.name, imgURL: undefined, file: element };
      reader.readAsDataURL(element);
      reader.onload = (_event: ProgressEvent) => {
        file.imgURL = (<FileReader>_event.target).result;
        this.value.push(file);
        this.valueChange.next(file);
      }
      this.uploadedFiles.push(element);
    }
    this.fileUploaded.next(this.uploadedFiles);
  }
  deleteAttachment(index) {
    this.value.splice(index, 1);
    this.valueChange.next(this._value);
    this.uploadedFiles.splice(index, 1);
    this.fileUploaded.next(this.uploadedFiles);
  }
}
