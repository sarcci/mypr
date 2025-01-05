import { TestBed } from '@angular/core/testing';

import { KolexamService } from './kolexam.service';

describe('KolexamService', () => {
  let service: KolexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
