import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameControllerService } from './services/game-controller/game-controller.service';
import { GameBoardTileComponent } from './components/game-board-tile/game-board-tile.component';
import { GameLogicService } from './services/game-logic/game-logic.service';
import { GameNotificationsService } from './services/game-notifications/game-notifications.service';
import { GameNotifierComponent } from './components/game-notifier/game-notifier.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameBoardTileComponent,
    GameNotifierComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule, // for Material icons
  ],
  providers: [
    GameControllerService,
    GameLogicService,
    GameNotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
