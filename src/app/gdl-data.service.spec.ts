import { TestBed } from '@angular/core/testing';

import { GdlDataService } from './gdl-data.service';

describe('GdlDataService', () => {
  let service: GdlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
