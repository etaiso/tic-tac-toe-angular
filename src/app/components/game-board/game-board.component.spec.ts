import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameBoardTileComponent } from '../game-board-tile/game-board-tile.component';
import { GameControllerService } from '../../services/game-controller/game-controller.service';
import { GameLogicService } from '../../services/game-logic/game-logic.service';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameBoardComponent,
        GameBoardTileComponent
      ],
      imports: [
        MatGridListModule
      ],
      providers: [
        GameControllerService,
        GameLogicService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
