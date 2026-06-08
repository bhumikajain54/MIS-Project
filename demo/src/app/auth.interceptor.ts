import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthServiceTsService } from './auth.service.ts.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private authService: AuthServiceTsService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
   

    // Clone the request with headers if the token exists
    const authReq = token ? req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8'
      }
    }) : req;

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          // Handle unauthorized access
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
