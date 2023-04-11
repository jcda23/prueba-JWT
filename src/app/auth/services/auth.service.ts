import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  // headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append(
    //   'Authorization',
    //   'Bearer ' + localStorage.getItem('token')
    // );
  }

  login(creds: Credentials) {
    // console.log('CREDENCIALES', creds);
    return this.http
      .post(`${this.baseUrl}/auth/authenticate`, creds, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;
          const bearerToken = headers.get('Authorization')!;
          const token = bearerToken.replace('Bearer ', '');
          localStorage.setItem('token', token);
          return body;
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
