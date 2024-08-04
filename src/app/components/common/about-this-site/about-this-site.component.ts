import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data-service.service';

@Component({
  selector: 'app-about-this-site',
  templateUrl: './about-this-site.component.html',
  styleUrls: ['./about-this-site.component.scss']
})
export class AboutThisSiteComponent implements OnInit {

  constructor(private loginDataService:LoginDataService) { }

  ngOnInit(): void {
  }

  loginGuestUser(){
    this.loginDataService.loginGuestUser();
  }

  loginGuestAdmin(){
    this.loginDataService.loginGuestAdmin();
  }

}
