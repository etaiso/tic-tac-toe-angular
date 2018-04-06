import { Injectable } from '@angular/core';

@Injectable()
export class GameLogicService {

  // ----------------
  // | 1,   2,   4  |
  // | 8,   16,  32 |
  // | 64, 128, 256 |
  // ----------------
  private WIN_MATRIX = [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256],
    [1, 8, 64],
    [2, 16, 128],
    [4, 32, 256],
    [1, 16, 256],
    [4, 16, 64]
  ];

  // WIN_AGGREGATED_VALUES is the calculated value of each array in the WIN_MATRIX.
  // the calculated value is an aggregation with OR operation (bitwsie).
  // For e.g: [1, 2, 4] will be reduced to 7 (which is the result of 1 | 2 | 4).
  private WIN_AGGREGATED_VALUES = this.WIN_MATRIX.map(a => a.reduce((acc, cur) => acc | cur))

  constructor() {}

  checkForWin(tilesValue: number): number[] {
    const winNumberIndex = this.WIN_AGGREGATED_VALUES.findIndex(num => (num & tilesValue) == num);
    return winNumberIndex >= 0 ? this.WIN_MATRIX[winNumberIndex] : [];
  }
}
