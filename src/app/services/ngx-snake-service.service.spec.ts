import { TestBed } from '@angular/core/testing';

import { BestScoreManager } from './ngx-snake-service.service';

describe('NgxSnakeServiceService', () => {
  let service: BestScoreManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestScoreManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
