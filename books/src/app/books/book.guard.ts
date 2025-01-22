import { CanActivateFn } from '@angular/router';

export const bookGuard: CanActivateFn = (route, state) => {
  const isbn = route.params['isbn'];
  console.log('isbn', isbn);
  return isbn !== '1234567891';
};
