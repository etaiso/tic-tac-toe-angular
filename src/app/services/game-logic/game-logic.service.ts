import { Injectable } from '@angular/core';

// Each tile is represented as a power of two number.
// This way we can easily check if a player has a winning combination by using bitwsise operations.
export const TILES_MATRIX = [
  [1, 2, 4],
  [8, 16, 32],
  [64, 128, 256]
];

@Injectable()
export class GameLogicService {
  private WINNING_LINES = [
    // Horizontal lines
    [TILES_MATRIX[0][0], TILES_MATRIX[0][1], TILES_MATRIX[0][2]],
    [TILES_MATRIX[1][0], TILES_MATRIX[1][1], TILES_MATRIX[1][2]],
    [TILES_MATRIX[2][0], TILES_MATRIX[2][1], TILES_MATRIX[2][2]],
    // Vertical lines
    [TILES_MATRIX[0][0], TILES_MATRIX[1][0], TILES_MATRIX[2][0]],
    [TILES_MATRIX[0][1], TILES_MATRIX[1][1], TILES_MATRIX[2][1]],
    [TILES_MATRIX[0][2], TILES_MATRIX[1][2], TILES_MATRIX[2][2]],
    // Diagonal lines
    [TILES_MATRIX[0][0], TILES_MATRIX[1][1], TILES_MATRIX[2][2]],
    [TILES_MATRIX[0][2], TILES_MATRIX[1][1], TILES_MATRIX[2][0]]
  ];

  // WIN_AGGREGATED_VALUES is the calculated value of each array in the WINNING_LINES.
  // the calculated value is an aggregation with OR operation (bitwsie).
  // For e.g: [1, 2, 4] will be reduced to 7 (which is the result of 1 | 2 | 4).
  private WIN_AGGREGATED_VALUES = this.WINNING_LINES.map(a => a.reduce((acc, cur) => acc | cur))

  constructor() {}

  checkForWin(tilesAggregatedValue: number): number[] {
    const winNumberIndex = this.WIN_AGGREGATED_VALUES.findIndex(val => (val & tilesAggregatedValue) == val);
    return winNumberIndex >= 0 ? this.WINNING_LINES[winNumberIndex] : [];
  }
}
