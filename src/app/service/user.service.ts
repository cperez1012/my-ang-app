import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // login(credentials: any): Observable<any> {
  //   return this.http.post(this.apiUrl, credentials);
  // }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
