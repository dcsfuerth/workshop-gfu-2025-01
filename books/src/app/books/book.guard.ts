import { CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const bookGuard: CanActivateFn = (route, state): boolean => {
  const isbn = route.params['isbn'];
  console.log('isbn', isbn);
  return isbn !== '1234567891';
};
