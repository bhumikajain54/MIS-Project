import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {
  private apiUrl = environment.API_URL;
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();
  static currentUserSubject: any;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  hasRole(requiredRoles: string[]): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser || !currentUser.role) return false;
    return requiredRoles.includes(currentUser.role);
  }

  // Public getter to expose the current user value
  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
