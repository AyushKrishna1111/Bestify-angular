import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { games } from '../interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private mainURL:string="https://bestify-java.herokuapp.com";

  //an instance for an games interface
  games: games[] = [];

  //api for fetching games from database
  private categoryUrl = this.mainURL+'/api/games'

  //api for fetching games top scorer from database
  private TopScorerUrl = this.mainURL+'/api/scores/getTopScores'

  //api for fetching games count from database
  private PieUrl = this.mainURL+'/api/scores/getGamesPie'

  //api for fetching Quiz Analysis from database
  private QuizAnalysisUrl = this.mainURL+'/api/quizeresult/getQuizAnalysis'

  constructor(private httpClient: HttpClient) { }

  // NOT IMPLEMENTED
  getGames(): Observable<games[]> {
    return this.httpClient.get<games[]>(this.categoryUrl)
  }


  getTopScorer(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.TopScorerUrl)
  }


  getPieGame(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.PieUrl)
  }

  
  getQuizAnalysis(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.QuizAnalysisUrl)
  }

}
