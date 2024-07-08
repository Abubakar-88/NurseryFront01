import { TestBed } from '@angular/core/testing';

import { NurseryWorldFormService } from './nursery-world-form.service';

describe('NurseryWorldFormService', () => {
  let service: NurseryWorldFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseryWorldFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
