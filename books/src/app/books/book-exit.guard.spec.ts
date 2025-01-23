import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { bookExitGuard } from './book-exit.guard';

describe('bookExitGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
