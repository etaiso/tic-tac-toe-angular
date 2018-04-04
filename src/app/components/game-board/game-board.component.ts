import { Component, OnInit } from '@angular/core';
import { GameControllerService } from '../../services/game-controller/game-controller.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  private tiles;

  constructor(private gameController: GameControllerService) { }

  ngOnInit() {
    this.tiles = this.gameController.tiles;
  }

  onTileClicked(tileValue: number) {
    this.gameController.playTurn(tileValue);
  }

}
