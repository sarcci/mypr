import { TestBed } from '@angular/core/testing';

import { KolService } from './kol.service';

describe('KolService', () => {
  let service: KolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
