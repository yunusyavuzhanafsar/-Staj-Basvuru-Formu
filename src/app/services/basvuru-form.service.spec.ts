import { TestBed } from '@angular/core/testing';

import { BasvuruFormService } from './basvuru-form.service';

describe('BasvuruFormService', () => {
  let service: BasvuruFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasvuruFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
