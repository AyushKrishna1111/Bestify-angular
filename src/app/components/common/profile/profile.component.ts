import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data-service.service';
import { FavouriteService } from 'src/app/services/favourite.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: LoginDataService, private favouriteService: FavouriteService) { 
   
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    // console.log("Current user ", this.currentUser)
    // this.userFavourite();
  }

  // userFavourite(){
  //   this.favouriteService.getUserFav(this.currentUser.user_id).subscribe((ret: any) => {
  //     // console.log("Ret: ", ret);
  //     this.favData = ret;
  //     // console.log(this.favData);
  //   })
  // }
  
  // removeFav(quiz_id:number){
  //   this.favouriteService.DeleteFav(quiz_id,this.currentUser.user_id).subscribe((res) => {
  //     // console.log("Ret: ", res);
  //   })
  // }
}

