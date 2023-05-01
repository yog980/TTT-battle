import { BoardComponent } from "../board/board.component";
import { GameComponent } from "./game.component";

describe('GameComponent',() => {
  let gameComponent : GameComponent;
  let isDraw : String;
  let winner : String;
  let isValid: boolean = true;

  beforeEach(() => {
    gameComponent = new GameComponent();
    isDraw = gameComponent.isDraw;
    winner = gameComponent.winner;
  });
  it('should verify grid length',() => {
    gameComponent.newGame();
    expect(gameComponent.squares.length).toEqual(9)
  });
  it('should verify player name',() => {
    const returnType = ['X','O'];
    let result = gameComponent.player;
    let isValid : boolean = false;
    returnType.forEach((e) => {
      if (e === result) {
        isValid = true;
      } else if(e === result) {
        isValid = true;
      }
    })
    expect(isValid).toBeTruthy();
  });
  it('should verify winning lines',() => {
    const winnerLines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
    expect(gameComponent.winnerLines).toEqual(winnerLines);
  });
  it('should ensure draw and win are not simultaneously possible',() => {
      if (isDraw && winner) {
        isValid = false;
      }
      expect(isValid).toBeTruthy();
  });
  it('should ensure winner and draw are null while initiating new game',() => {
    gameComponent.newGame();
    if(isDraw || winner) {
      isValid = false;
    }
    expect(isValid).toBeTruthy();
  });
})

