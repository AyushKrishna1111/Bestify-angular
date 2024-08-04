import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataService } from 'src/app/services/login-data-service.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  
  constructor(private router : Router, private loginDataService:LoginDataService) { }

  ngOnInit(): void {
    if(this.loginDataService.isAdminLoggedIn())
      this.router.navigate(['admin']);
    else if(this.loginDataService.isUserLoggedIn())
      this.router.navigate(['user']);
  }

  loginGuestUser(){
    this.loginDataService.loginGuestUser();
  }

  loginGuestAdmin(){
    this.loginDataService.loginGuestAdmin();
  }
  
}
