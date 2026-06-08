import { AuthServiceTsService } from './../../auth.service.ts.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

// Define the interceptor function using the `inject` method
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthServiceTsService);
  const currentUser = authService.getCurrentUser(); // Use the public getter here

  if (currentUser && currentUser.token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    });
  }

  return next(req);
};
