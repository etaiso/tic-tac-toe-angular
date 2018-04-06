import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../models/player';
import { ITileType } from '../../models/board-tile';

export enum GameNotificationType {
  Normal,
  Cross,
  Circle,
  Tie
};

export interface IGameNotification {
  message: string;
  type: GameNotificationType;
};

@Injectable()
export class GameNotificationsService {
  publisher: BehaviorSubject<IGameNotification> = new BehaviorSubject({ message: '', type: GameNotificationType.Normal });
  private notification: IGameNotification;

  constructor() { }

  playerTurn(player: Player) {
    this.publishMessage({ message: `${player.name}'s turn`, type: (player.tileType === ITileType.Cross) ? GameNotificationType.Cross : GameNotificationType.Circle });
  }

  declareWin(player: Player) {
    this.publishMessage({ message: `${player.name} won the round!`, type: (player.tileType === ITileType.Cross) ? GameNotificationType.Cross : GameNotificationType.Circle });
  }

  declareTie() {
    this.publishMessage({ message: `No winner this round :(`, type: GameNotificationType.Tie });
  }

  publishMessage(notification: IGameNotification) {
    this.publisher.next(notification);
  }
}
