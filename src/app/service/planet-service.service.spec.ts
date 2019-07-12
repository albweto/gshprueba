import { TestBed } from '@angular/core/testing';

import { PlanetServiceService } from './planet-service.service';

describe('PlanetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetServiceService = TestBed.get(PlanetServiceService);
    expect(service).toBeTruthy();
  });
});
