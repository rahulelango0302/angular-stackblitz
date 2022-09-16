import { Component, VERSION, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchtext: string = '';

  arr = [
    {
      name: 'n1',
      email: 'em1',
      num: 123,
      tag: 'Y',
    },
    {
      name: 'n2',
      email: 'em2',
      num: 34232,
      tag: 'Y',
    },
    {
      name: 'n3',
      email: 'em3',
      num: 23133,
      tag: 'N',
    },
    {
      name: 'n4',
      email: 'em4',
      num: 23132233,
      tag: 'Y',
    },
    {
      name: 'n5',
      email: 'em5',
      num: 23133,
      tag: 'N',
    },
  ];

  @Output() output_test: string;

  len: number = 0;

  OnClick() {
    this.len = this.arr.length;
    console.log('HEYYYYYYY!!!!!!!!!!!!!1');
  }

  getSearchitem(data: string) {
    this.searchtext = data;
    console.log(this.searchtext);
  }
}
