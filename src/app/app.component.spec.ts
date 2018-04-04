import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameBoardTileComponent } from './components/game-board-tile/game-board-tile.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameLogicService } from './services/game-logic/game-logic.service';
import { GameControllerService } from './services/game-controller/game-controller.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameBoardComponent,
        GameBoardTileComponent
      ],
      providers: [
        GameControllerService,
        GameLogicService
      ],
      imports: [
        MatGridListModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
