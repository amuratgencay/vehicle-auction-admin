import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'dokuman-indir-link',
  templateUrl: './dokuman-indir-link.component.html',
  styleUrls: ['./dokuman-indir-link.component.scss']
})
export class DokumanIndirLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;

  public get downloadLink(): string {
    return `${environment.apiUrl}/Dokuman/${this.id}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
