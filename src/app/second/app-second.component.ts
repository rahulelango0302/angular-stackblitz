import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input() length: number;
  searchvalue: string = 'NULL';
  confirmvalue: string;
  // Onclick(){
  //   this.confirmvalue=this.searchvalue;

  // }

  @Output()
  searchthetype: EventEmitter<string> = new EventEmitter<string>();

  onsearchthetype() {
    this.confirmvalue = this.searchvalue;
    this.searchthetype.emit(this.confirmvalue);
  }
}
