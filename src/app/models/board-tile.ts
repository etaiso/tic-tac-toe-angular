import { Player } from './player';
export enum ITileType {
  Empty,
  Cross,
  Circle
}

export class BoardTile {
  private type = ITileType.Empty;
  private marked = false;

  constructor(public value: number) {}

  mark(player: Player) {
    this.type = player.tileType;
    this.marked = true;
  }

  unMark() {
    this.type = ITileType.Empty;
    this.marked = false;
  }

  isMarked() {
    return this.marked;
  }
}

export class BoardTileFactory {
  static create(value: number) {
    return new BoardTile(value);
  }
}
