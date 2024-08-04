import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataService } from 'src/app/services/login-data-service.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.scss']
})
export class UserHomepageComponent implements OnInit {

  constructor(private router : Router, private loginDataService:LoginDataService) { }

  ngOnInit(): void { }

  routeToUrl(url:string):void{
      this.router.navigate([url]);
  }

}
