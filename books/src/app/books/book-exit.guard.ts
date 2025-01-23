import { CanDeactivateFn } from '@angular/router';

export const bookExitGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log('bookExitGuard', {
    component,
    currentRoute,
    currentState,
    nextState,
  });

  // const bookDetail = component as BookDetailComponent;
  // const result = bookDetail?.book?.isbn !== '1234567890';
  // return result;

  return true;
};
