import { TestBed } from '@angular/core/testing';

import { FrontendApiService } from './frontend-api.service';

describe('FrontendApiService', () => {
  let service: FrontendApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
