import { TestBed } from '@angular/core/testing';

import { ConstituencyService } from './constituency.service';

describe('RegionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstituencyService = TestBed.get(ConstituencyService);
    expect(service).toBeTruthy();
  });
});
