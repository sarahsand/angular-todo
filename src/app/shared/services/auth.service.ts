import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';



const requestOptions = {
  withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private urlLogin = `${environment.apiBaseUrl}/login`;
  private urlUser = `${environment.apiBaseUrl}/user`;
  private urlUserIdentity = `${environment.apiBaseUrl}/user/identity`;

  constructor(private http: HttpClient) {
  }

  //The HTTP call may return a boolean or Response
  login(email: string, password: string): Observable<boolean | Response> {
    console.log('auth.service login');

    const loginInfo = { 'email': email, 'password': password };

    return this.http.put(this.urlLogin, loginInfo, requestOptions)
      .pipe(
        tap((res: Response) => {
          if (res) {
            console.log('logged in');
            return of(true);
          }

          console.log('not logged in');
          return of(false);
        }),
        catchError((error) => {
          console.log('login error', error);
          return of(false);
        })
      );
  }

  signup(email: string, password: string): Observable<boolean | Response> {
    const loginInfo = { 'email': email, 'password': password };
    return this.http.post(this.urlUser, loginInfo, requestOptions)
      .pipe(
        tap((res: Response) => {
          if (res) {
            return of(true);
          }

          return of(false);
        }),
        catchError((error) => {
          console.log('signup error', error);
          return of(false);
        }),
    );
  }

  isAuthenticated(): Observable<boolean | Response> {
    return this.http
      .get(this.urlUserIdentity, requestOptions)
      .pipe(
        tap((res: Response) => {
          if (res) {
            console.log('logged in');
            return of(true);
          }

          console.log('not logged in');
          return of(false);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status !== 403) {
            console.log('isAuthenticated error', error);
          }
          console.log('not logged in', error);
          return of(false);
        }),
    );
  }
}
