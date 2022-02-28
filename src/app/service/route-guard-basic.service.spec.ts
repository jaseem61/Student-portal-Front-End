import { TestBed } from '@angular/core/testing';

import { RouteGuardBasicService } from './route-guard-basic.service';

describe('RouteGuardBasicService', () => {
  let service: RouteGuardBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
