import { TestBed } from '@angular/core/testing';

import { RouteGuardLogoutService } from './route-guard-logout.service';

describe('RouteGuardLogoutService', () => {
  let service: RouteGuardLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
