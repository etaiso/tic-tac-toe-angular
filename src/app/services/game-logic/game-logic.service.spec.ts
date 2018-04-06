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
    expect(service.checkForWin(1 | 2 | 4)).toEqual([1, 2, 4]);
    expect(service.checkForWin(1 | 2 | 4 | 8)).toEqual([1, 2, 4]);
    expect(service.checkForWin(1 | 2 | 4 | 64 | 256)).toEqual([1, 2, 4]);
  }));

  it('should call win when diagonal is marked', inject([GameLogicService], (service: GameLogicService) => {
    expect(service.checkForWin(1 | 16 | 256)).toEqual([1, 16, 256]);
    expect(service.checkForWin(1 | 16 | 256 | 32)).toEqual([1, 16, 256]);
    expect(service.checkForWin(1 | 16 | 256 | 4 | 128)).toEqual([1, 16, 256]);
  }));

  it(`shouldn't call win when not part of winning variation`, inject([GameLogicService], (service: GameLogicService) => {
    expect(service.checkForWin(1 | 2)).toEqual([]);
    expect(service.checkForWin(1 | 2 | 8)).toEqual([]);
    expect(service.checkForWin(1 | 4 | 8 | 16 | 128)).toEqual([]);
    expect(service.checkForWin(32)).toEqual([]);
  }));
});
