import { TestBed } from '@angular/core/testing';

import { JurryServiceService } from './jurry-service.service';

describe('JurryServiceService', () => {
  let service: JurryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JurryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
