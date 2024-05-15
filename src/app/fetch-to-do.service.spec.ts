import { TestBed } from '@angular/core/testing';

import { FetchToDoService } from './fetch-to-do.service';

describe('FetchToDoService', () => {
  let service: FetchToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
