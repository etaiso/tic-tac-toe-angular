import { PlayerCreator } from './../models/player';
import { Player } from "../models/player";

export class PlayersFactory {
  static create(): Player[] {
    return [
      PlayerCreator.createPlayerA('Player A'),
      PlayerCreator.createPlayerB('Player B')
    ];
  }
}
