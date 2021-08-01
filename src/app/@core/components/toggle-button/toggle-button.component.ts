import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: `
    <input type="checkbox" [id]="id" [name]="name" [checked]="value" [disabled]="disabled"
      (change)="changed.emit($event.target.checked)">
    <label class="toggle-button-switch"  
      [for]="name"></label>
    <div class="toggle-button-text">
      <div class="toggle-button-text-on align-middle">Var</div>
      <div class="toggle-button-text-off align-middle">Yok</div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      width: 50px;
      height: 25px;
    }
    
    input[type="checkbox"] {
      display: none; 
    }

    .toggle-button-switch {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 23px;
      height: 23px;
      background-color: #fff;
      border-radius: 100%;
      cursor: pointer;
      z-index: 100;
      transition: left 0.3s;
    }

    .toggle-button-text {
      overflow: hidden;
      background-color: #fc3164;
      border-radius: 13px;
      height: 26px;
      box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
      transition: background-color 0.3s;
    }

    .toggle-button-text-on,
    .toggle-button-text-off {
      float: left;
      width: 50%;
      height: 100%;
      font-size:10px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    input[type="checkbox"]:checked ~ .toggle-button-switch {
      left: 26px;
    }

    input[type="checkbox"]:checked ~ .toggle-button-text {
      background-color: #3dbf87;
    }
  `]
})
export class ToggleButtonComponent {
  @Input() name: string;
  @Input() id: string;
  @Input() value: boolean;
  @Input() disabled: boolean;
  @Output() changed = new EventEmitter<boolean>();
}
