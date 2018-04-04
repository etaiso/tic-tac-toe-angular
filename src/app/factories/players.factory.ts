import { PlayerFactory } from './../models/player';
import { Player } from "../models/player";

export class PlayersFactory {
  static create(): Player[] {
    return [
      PlayerFactory.createPlayerA('John'),
      PlayerFactory.createPlayerB('Anna')
    ];
  }
}
