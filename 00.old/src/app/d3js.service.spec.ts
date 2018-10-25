import { TestBed } from '@angular/core/testing';

import { D3jsService } from './d3js.service';

describe('D3jsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D3jsService = TestBed.get(D3jsService);
    expect(service).toBeTruthy();
  });
});
