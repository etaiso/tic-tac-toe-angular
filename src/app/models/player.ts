import { ITileType } from './board-tile';
import { GameLogicService } from '../services/game-logic/game-logic.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Player {
  public name: string;
  public tileType: ITileType;
  private wins: number = 0;
  private tilesAggregatedValue: number = 0 ;
  private gameLogic: GameLogicService = new GameLogicService();

  constructor(name: string, tileType: ITileType) {
    this.name = name;
    this.tileType = tileType;
  }

  increaseWins() {
    this.wins++;
  }

  resetTilesAggregation() {
    this.tilesAggregatedValue = 0;
  }

  aggregateTile(value: number) {
    this.tilesAggregatedValue |= value;
  }

  getWinningTiles(): number[] {
    return this.gameLogic.checkForWin(this.tilesAggregatedValue);
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
