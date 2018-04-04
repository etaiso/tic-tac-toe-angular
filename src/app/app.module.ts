import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameControllerService } from './services/game-controller/game-controller.service';
import { GameBoardTileComponent } from './components/game-board-tile/game-board-tile.component';
import { GameLogicService } from './services/game-logic/game-logic.service';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameBoardTileComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [
    GameControllerService,
    GameLogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
