import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardTileComponent } from './game-board-tile.component';
import { MatIconModule } from '@angular/material';

describe('GameBoardTileComponent', () => {
  let component: GameBoardTileComponent;
  let fixture: ComponentFixture<GameBoardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameBoardTileComponent
      ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
