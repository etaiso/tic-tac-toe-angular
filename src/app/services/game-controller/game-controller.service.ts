import { Injectable } from '@angular/core';
import { ITileType, BoardTileFactory, BoardTile } from '../../models/board-tile';
import { GameLogicService } from '../game-logic/game-logic.service';
import { Player, PlayerFactory } from '../../models/player';
import { TilesFactory } from '../../factories/tiles.factory';
import { PlayersFactory } from '../../factories/players.factory';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { GameNotificationsService } from '../game-notifications/game-notifications.service';

const LAST_TURN_NUMBER = 9;

@Injectable()
export class GameControllerService {
  private currentPlayerIndex;
  tilesSubject: BehaviorSubject<BoardTile[]> = new BehaviorSubject([]);
  players: Player[] = [];
  tiles: BoardTile[] = [];
  turnNumber: number;

  constructor(private gameNotifications: GameNotificationsService) {
    this.newGame();
  }

  private nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    this.notifyPlayerTurn();
  }

  private blockRemainingTiles() {
    this.tiles.filter(tile => !tile.marked).forEach(tile => tile.block());
  }

  private boldWinningTiles(tileIds: number[]) {
    this.tiles.filter(tile => tileIds.includes(tile.id)).forEach(tile => {
      tile.bold();
    });
  }

  playTurn(tileId: number) {
    const tileIndex = this.tiles.findIndex(tile => tile.id === tileId);
    const tile = this.tiles[tileIndex];

    // if tile is alreayd marked, skip
    if (tile.marked) {
      return;
    }

    const player = this.getCurrentPlayer();
    tile.mark(player);
    player.aggregateTile(tileId);
    this.turnNumber++;

    // check if current player has won
    let winningTiles = player.getWinningTiles();

    if (winningTiles.length) {
      player.increaseWins();
      this.boldWinningTiles(winningTiles);
      this.blockRemainingTiles();
      this.notifyWin();
    // check if it's a tie
    } else if (this.turnNumber === LAST_TURN_NUMBER) {
      this.gameNotifications.declareTie();
      return;
    } else {
      this.nextTurn();
    }
  }

  newGame() {
    this.tiles = TilesFactory.create();
    this.players = PlayersFactory.create();
    this.currentPlayerIndex = 0;
    this.turnNumber = 0;
    this.tilesSubject.next(this.tiles);
    this.notifyPlayerTurn();
  }

  private notifyPlayerTurn() {
    this.gameNotifications.playerTurn(this.getCurrentPlayer());
  }

  private notifyWin() {
    this.gameNotifications.declareWin(this.getCurrentPlayer());
  }

  private getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }
}
