import { TestBed } from '@angular/core/testing';

import { PictureListService } from './picture-list.service';

describe('PictureListService', () => {
  let service: PictureListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
