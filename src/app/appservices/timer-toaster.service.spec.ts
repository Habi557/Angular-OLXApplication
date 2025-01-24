import { TestBed } from '@angular/core/testing';

import { TimerToasterService } from './timer-toaster.service';

describe('TimerToasterService', () => {
  let service: TimerToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
