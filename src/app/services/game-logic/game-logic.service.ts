import { Injectable } from '@angular/core';

@Injectable()
export class GameLogicService {

  // ----------------
  // | 1,   2,   4  |
  // | 8,   16,  32 |
  // | 64, 128, 256 |
  // ----------------

  private WIN_NUMBERS = [
    1 | 2 | 4,
    8 | 16 | 32,
    64 | 128 | 256,
    1 | 8 | 64,
    2 | 16 | 128,
    4 | 32 | 256,
    1 | 16 | 256,
    4 | 16 | 64
  ];

  private WIN_MAP = [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256],
    [1, 8, 64],
    [2, 16, 128],
    [4, 32, 256],
    [1, 16, 256],
    [4,16, 64]
  ];

  constructor() {}

  checkForWin(tilesValue: number): number[] {
    const winNumberIndex = this.WIN_NUMBERS.findIndex(num => (num & tilesValue) == num);
    if (winNumberIndex >= 0) {
      return this.WIN_MAP[winNumberIndex];
    }
  }
}
