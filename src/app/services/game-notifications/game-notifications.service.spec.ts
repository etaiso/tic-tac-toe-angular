import { TestBed, inject } from '@angular/core/testing';

import { GameNotificationsService } from './game-notifications.service';

describe('GameNotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameNotificationsService]
    });
  });

  it('should be created', inject([GameNotificationsService], (service: GameNotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
