import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  squares: any[] = [];
  xHasNext: Boolean = true;
  homePage: Boolean = true;
  winner: String = '';
  isDraw: String = '';
  counter: number = 0;
  disableButton: boolean = false;

  winnerLines: any = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];


  constructor() {

  }

  ngOnInit():void {

  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.isDraw = '';
    this.winner = '';
    this.counter = 0;
    this.disableButton = false;
    this.homePage = false;
  }

  get player(){
    return this.xHasNext?'X':'O';
  }

  makeMove(idx: number) {
    if(!this.squares[idx]) {
        this.squares.splice(idx,1,this.player);
        this.xHasNext = !this.xHasNext;
        this.counter++;
    }
    this.winner = this.calculateWinner();

    if(this.winner) {
      this.disableButton = true;
    }

    if (!this.winner && this.counter == 9) {
      this.isDraw = "Yes";
    }
    console.log("is draw :: ",this.isDraw,this.counter);
  }

  calculateWinner() {
    for (let i=0;i<this.winnerLines.length;i++) {
        const [a,b,c] = this.winnerLines[i];
        if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[b] === this.squares[c]) {
            return this.squares[a]
        }
    }
    return null;
  }

}
