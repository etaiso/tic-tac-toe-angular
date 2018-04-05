import { BoardTile } from './../../models/board-tile';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameControllerService } from '../../services/game-controller/game-controller.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {
  private tiles: BoardTile[];
  private subscription: Subscription;

  constructor(private gameController: GameControllerService) { }

  ngOnInit() {
    this.subscription = this.gameController.tilesSubject.subscribe(tiles => {
      this.tiles = tiles;
    });
  }

  onTileClicked(tileValue: number) {
    this.gameController.playTurn(tileValue);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
