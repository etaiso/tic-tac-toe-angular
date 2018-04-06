import { BoardTile, BoardTileCreator } from "../models/board-tile";
import { TILES_MATRIX } from "../services/game-logic/game-logic.service";

export class TilesFactory {
  static create(): BoardTile[] {
    const tiles = [];

    TILES_MATRIX.reduce((acc, cur) => acc.concat(cur), []).forEach(tileId => {
      tiles.push(BoardTileCreator.create(tileId));
    });

    return tiles;
  }
}
