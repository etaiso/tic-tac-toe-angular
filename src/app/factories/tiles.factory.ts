import { BoardTile, BoardTileCreator } from "../models/board-tile";

export class TilesFactory {
  static create(): BoardTile[] {
    const tiles = [];

    for (let i = 0; i < 9; i++) {
      tiles.push(BoardTileCreator.create(2 ** i));
    }

    return tiles;
  }
}
