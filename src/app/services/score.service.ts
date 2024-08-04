import { Injectable } from '@angular/core';
import { Score } from '../classes/score';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private mainURL:string="https://bestify-java.herokuapp.com";

  url=this.mainURL+'/api/scores';
  constructor(private httpClient: HttpClient) { }

  postGameScore(data:Score): Observable<Score> {
    // console.log(" ScoreService.postGameScoreScore() ; Score -> " , data);
     return this.httpClient.post<Score>(this.url,data);
   }
   
}
