import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameNotificationsService, IGameNotification, GameNotificationType } from '../../services/game-notifications/game-notifications.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-notifier',
  templateUrl: './game-notifier.component.html',
  styleUrls: ['./game-notifier.component.scss']
})
export class GameNotifierComponent implements OnInit, OnDestroy {
  notification: IGameNotification;
  notificationType = GameNotificationType;
  private subscription: Subscription;

  constructor(private gameNotifications: GameNotificationsService) { }

  ngOnInit() {
    this.subscription = this.gameNotifications.publisher.subscribe(notification => {
      this.notification = notification;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
