import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNotifierComponent } from './game-notifier.component';

describe('GameNotifierComponent', () => {
  let component: GameNotifierComponent;
  let fixture: ComponentFixture<GameNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
