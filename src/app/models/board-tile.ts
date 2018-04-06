import { Player } from './player';

export enum ITileType {
  Empty,
  Cross,
  Circle,
  Blocked
}

export class BoardTile {
  public id: number;
  public marked = false;
  private bolded = false;
  private type = ITileType.Empty;

  constructor(id: number) {
    this.id = id;
  }

  mark(player: Player) {
    this.type = player.tileType;
    this.marked = true;
  }

  unMark() {
    this.type = ITileType.Empty;
    this.marked = false;
  }

  bold() {
    this.bolded = true;
  }

  block() {
    this.type = ITileType.Blocked;
    this.marked = true;
  }
}

export class BoardTileCreator {
  static create(id: number) {
    return new BoardTile(id);
  }
}
