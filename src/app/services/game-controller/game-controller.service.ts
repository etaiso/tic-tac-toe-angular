import { Injectable } from '@angular/core';
import { ITileType, BoardTileFactory, BoardTile } from '../../models/board-tile';
import { GameLogicService } from '../game-logic/game-logic.service';
import { Player, PlayerFactory } from '../../models/player';
import { TilesFactory } from '../../factories/tiles.factory';
import { PlayersFactory } from '../../factories/players.factory';


@Injectable()
export class GameControllerService {
  private currentPlayerIndex = 0;

  players: Player[] = [];
  tiles: BoardTile[] = [];

  constructor() {
    this.tiles = TilesFactory.create();
    this.players = PlayersFactory.create();
  }

  private nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
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
      console.log(`player ${player.name} won!`);
    } else {
      this.nextTurn();
    }
  }
}
