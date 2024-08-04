import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private mainURL:string="https://bestify-java.herokuapp.com";

  AUTH_API:string = this.mainURL+'/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  user!: {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
  };
  
  register(user: any): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password
    }, this.httpOptions);
  }

}
