import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataService } from 'src/app/services/login-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private loginDataService: LoginDataService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.loginDataService.login(this.form).subscribe(
      (data:any) => {
        //this.tokenStorage.saveToken(data.accessToken);
        //localStorage.setItem("user_id", data.user_id);
        
        this.loginDataService.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.loginDataService.changeLoginStatus(true);
        this.redirectUser();
   
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  redirectUser():void{
    let redirectURL:string="";

    if (this.loginDataService.getUser().role) {
      redirectURL="admin";
    }
    else{
      redirectURL="user";
    }

    setTimeout(()=>{
      this.router.navigate([redirectURL]);
    },1000);
  }
}
