import { TestBed } from '@angular/core/testing';

import { QuizaddService } from './quizadd.service';

describe('QuizaddService', () => {
  let service: QuizaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
