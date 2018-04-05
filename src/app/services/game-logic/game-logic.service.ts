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

  // WIN_NUMBERS is the calculated value of each array in the WIN_MATRIX.
  // the calculated value is an aggregation of the OR operation (bitwsie).
  private WIN_NUMBERS = this.WIN_MATRIX.map(a => a.reduce((acc, cur) => acc | cur))

  constructor() {}

  checkForWin(tilesValue: number): number[] {
    const winNumberIndex = this.WIN_NUMBERS.findIndex(num => (num & tilesValue) == num);
    if (winNumberIndex >= 0) {
      return this.WIN_MATRIX[winNumberIndex];
    }
  }
}
