import { Component } from '@angular/core';
import { GameControllerService } from './services/game-controller/game-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gameController: GameControllerService) {}

  onResetClick() {
    this.gameController.newGame();
  }
}
