import { TestBed } from '@angular/core/testing';

import { RandomServiceFileService } from './random-service-file.service';

describe('RandomServiceFileService', () => {
  let service: RandomServiceFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomServiceFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
