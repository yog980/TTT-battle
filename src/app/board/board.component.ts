import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() value: 'X'|'O'|undefined;
  @Input() player: 'X'|'O'|undefined;
  @Input() disableButton: Boolean = false;
  buttonBg: String = '';
  isHidden: boolean = true;

  constructor() {

  }

  over() {
    console.log("On over");
    this.isHidden = false;
  }

  out() {
    console.log("log out");
    this.isHidden = true;
  }

  setBgColor(val?: String) {
    if (val == 'X') {
      this.buttonBg ='#568278';
    } else if (val == 'Y') {
      this.buttonBg ='#7a335c';
    }
  }
}
