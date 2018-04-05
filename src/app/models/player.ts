import { ITileType } from './board-tile';
import { GameLogicService } from '../services/game-logic/game-logic.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Player {
  private wins: number = 0;
  private tilesValue: number = 0 ;
  private gameLogic: GameLogicService = new GameLogicService();

  constructor(public name: string, public tileType: ITileType) {}

  increaseWins() {
    this.wins++;
  }

  resetTileValue() {
    this.tilesValue = 0;
  }

  addTileValue(value: number) {
    this.tilesValue |= value;
  }

  hasWon() {
    return this.gameLogic.checkForWin(this.tilesValue);
  }
}

export class PlayerFactory {
  static createPlayerA(name: string) {
    return new Player(name, ITileType.Cross);
  }

  static createPlayerB(name: string) {
    return new Player(name, ITileType.Circle);
  }
}
