import { TestBed } from '@angular/core/testing';

import { ReactivosService } from './reactivos.service';

describe('ReactivosService', () => {
  let service: ReactivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
