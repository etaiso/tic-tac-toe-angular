import { TestBed, inject } from '@angular/core/testing';

import { GameLogicService } from './game-logic.service';

describe('GameLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameLogicService]
    });
  });

  it('should be created', inject([GameLogicService], (service: GameLogicService) => {
    expect(service).toBeTruthy();
  }));

  it('should call win when first row is marked', inject([GameLogicService], (service: GameLogicService) => {
    expect(service.checkForWin(1 | 2 | 4)).toBeTruthy();
    expect(service.checkForWin(1 | 2 | 4 | 8)).toBeTruthy();
    expect(service.checkForWin(1 | 2 | 4 | 64 | 256)).toBeTruthy();
  }));

  it('should call win when diagonal is marked', inject([GameLogicService], (service: GameLogicService) => {
    expect(service.checkForWin(1 | 16 | 256)).toBeTruthy();
    expect(service.checkForWin(1 | 16 | 256 | 32)).toBeTruthy();
    expect(service.checkForWin(1 | 16 | 256 | 4 | 128)).toBeTruthy();
  }));

  it(`shouldn't call win when not part of winning variation`, inject([GameLogicService], (service: GameLogicService) => {
    expect(service.checkForWin(1 | 2)).toBeFalsy();
    expect(service.checkForWin(1 | 2 | 8)).toBeFalsy();
    expect(service.checkForWin(1 | 4 | 8 | 16 | 128)).toBeFalsy();
    expect(service.checkForWin(32)).toBeFalsy();
  }));
});
