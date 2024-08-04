import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favURL='http://localhost:8080/api/favourites/';

  constructor(private httpClient: HttpClient) { }

  insertFav(fav: any)
  {
    // console.log(JSON.stringify(fav));
    return this.httpClient.post(this.favURL, fav);
  }

  DeleteFav(quiz_id: number, user_id: number)
  { 
    return this.httpClient.delete(this.favURL+'activity_id='+quiz_id+'&user_id='+user_id);
  }

  getFavourite(quiz_id: number, user_id: number){
    return this.httpClient.get(this.favURL+'activity_id='+quiz_id+'&user_id='+user_id);
  }
  getUserFav(user_id: number){
    return this.httpClient.get(this.favURL+'user_id='+user_id);
  }
  // deleteUserFav(quiz_id:number){
  //   return this.httpClient.delete(this.favURL+'user_id='+quiz_id);
  // }
}
