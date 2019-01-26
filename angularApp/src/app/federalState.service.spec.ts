import { TestBed } from '@angular/core/testing';

import { FederalStateService } from './federalState.service';

describe('FederalStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:   FederalStateService = TestBed.get(  FederalStateService );
    expect(service).toBeTruthy();
  });
});
