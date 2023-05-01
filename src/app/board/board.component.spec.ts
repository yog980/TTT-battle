import { BoardComponent } from "./board.component";

describe('BoardComponent',() =>{
    let boardComponent: BoardComponent;
    beforeEach(() => {
        boardComponent = new BoardComponent();
    })

    it('should display player name while hover',() => {
        boardComponent.over();
        expect(boardComponent.isHidden).toBeFalsy();
    });
    
})