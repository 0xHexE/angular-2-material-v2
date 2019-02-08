import { TestBed } from '@angular/core/testing';

import { MaterialV2ModService } from './material-v2-mod.service';

describe('MaterialV2ModService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialV2ModService = TestBed.get(MaterialV2ModService);
    expect(service).toBeTruthy();
  });
});
