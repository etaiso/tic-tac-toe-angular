import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export enum GameNotificationType {
  Normal,
  Win,
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

  playerTurn(playerName: string) {
    this.publishMessage({ message: `${playerName}'s turn`, type: GameNotificationType.Normal});
  }

  declareWin(playerName: string) {
    this.publishMessage({ message: `${playerName} won this round!`, type: GameNotificationType.Win });
  }

  declareTie() {
    this.publishMessage({ message: `No winner this round :(`, type: GameNotificationType.Tie });
  }

  publishMessage(notification: IGameNotification) {
    this.publisher.next(notification);
  }
}
