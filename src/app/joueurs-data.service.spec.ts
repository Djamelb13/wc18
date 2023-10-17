import { TestBed } from '@angular/core/testing';

import { JoueursDataService } from './joueurs-data.service';

describe('JoueursDataService', () => {
  let service: JoueursDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueursDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
