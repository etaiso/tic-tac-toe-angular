import { TestBed, inject } from '@angular/core/testing';

import { GameControllerService } from './game-controller.service';
import { GameLogicService } from '../game-logic/game-logic.service';

describe('GameControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameControllerService,
        GameLogicService
      ]
    });
  });

  it('should be created', inject([GameControllerService], (service: GameControllerService) => {
    expect(service).toBeTruthy();
  }));
});
