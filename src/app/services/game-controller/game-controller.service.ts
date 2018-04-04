import { Injectable } from '@angular/core';
import { ITileType, BoardTileFactory, BoardTile } from '../../models/board-tile';
import { GameLogicService } from '../game-logic/game-logic.service';
import { Player, PlayerFactory } from '../../models/player';
import { TilesFactory } from '../../factories/tiles.factory';
import { PlayersFactory } from '../../factories/players.factory';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameControllerService {
  private currentPlayerIndex = 0;
  tilesSubject: BehaviorSubject<BoardTile[]> = new BehaviorSubject([]);
  players: Player[] = [];
  tiles: BoardTile[] = [];

  constructor() {
    this.newGame();
  }

  private nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  private blockRemainingTiles() {
    this.tiles.filter(tile => !tile.isMarked()).forEach(tile => tile.block());
  }

  playTurn(tileValue: number) {
    const tileIndex = this.tiles.findIndex(tile => tile.value === tileValue);
    const tile = this.tiles[tileIndex];

    // if tile is alreayd marked, skip
    if (tile.isMarked()) {
      return;
    }
    const player = this.players[this.currentPlayerIndex];
    tile.mark(player);
    player.addTileValue(tileValue);

    if (player.isPlayerWin()) {
      player.increaseWins();
      this.blockRemainingTiles();
      console.log(`player ${player.name} won!`);
    } else {
      this.nextTurn();
    }
  }

  newGame() {
    console.log('new');

    this.tiles = TilesFactory.create();
    this.players = PlayersFactory.create();
    this.currentPlayerIndex = 0;
    this.tilesSubject.next(this.tiles);
  }
}
