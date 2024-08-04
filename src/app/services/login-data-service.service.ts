import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  TOKEN_KEY:string = 'auth-token';
  USER_KEY:string = 'auth-user';
  
  private mainURL:string="https://bestify-java.herokuapp.com";

  AUTH_API:string = this.mainURL+'/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   // Observable source
   private loginData = new BehaviorSubject<boolean>(false);
   // Observable stream
   loginDataObservable = this.loginData.asObservable();
   
   // service command
   changeLoginStatus(status:boolean) {
     this.loginData.next(status);
   }

  constructor(private http: HttpClient,private router:Router) { }

  public login(credentials: { email: string; password: string; }): Observable<any> {
    return this.http.post(this.AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, this.httpOptions);
  }

  public loginGuestUser():void {
    let credentials:any={email:"guest_user",password:"guest_user"};
    this.login(credentials).subscribe(
      (data:any) => { 
        this.saveUser(data);
        this.changeLoginStatus(true);
        this.router.navigate(['user']);
      },
      (err:any) => {
      // console.log(err);
      }
    );
  }

  public loginGuestAdmin():void {
    let credentials:any={email:"guest_admin",password:"guest_admin"};
    this.login(credentials).subscribe(
      (data:any) => { 
        this.saveUser(data);
        this.changeLoginStatus(true);
        this.router.navigate(['admin']);
      },
      (err:any) => {
      // console.log(err);
      }
    );
  }

  public isUserLoggedIn():boolean{
    let isLoggedIn:boolean=(this.getUser()===null)?false:true;
    if(isLoggedIn){
      let isAdmin:boolean = this.getUser().role;
      if(isAdmin)
      return false;
      else
      return true;
    }
    return false;
  }

  public isAdminLoggedIn():boolean{
    let isLoggedIn:boolean=(this.getUser()===null)?false:true;
    if(isLoggedIn){
      let isAdmin:boolean = this.getUser().role;
      if(isAdmin)
      return true;
      else
      return false;
    }
    return false;
  }

  public isLoggedIn():boolean{
    let isLoggedIn:boolean=(this.getUser()===null)?false:true;
    return isLoggedIn;
  }

  public signOut():void {
    window.sessionStorage.clear();
    window.localStorage.clear();
    
  }

  // not used anywhere
  public saveToken(token: string) {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  // not used anywhere
  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY)!;
  }

  public saveUser(user:any) {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(this.USER_KEY)!);
  }

}
