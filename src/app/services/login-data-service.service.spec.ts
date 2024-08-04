import { TestBed } from '@angular/core/testing';

import { LoginDataService } from './login-data-service.service';

describe('TokenStorageServiceService', () => {
  let service: LoginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
