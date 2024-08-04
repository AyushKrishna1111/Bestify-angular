import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { puzzle } from '../interfaces/puzzle';
import { user } from '../interfaces/user';
import { puzzleResult } from '../interfaces/puzzle_result';

@Injectable({
  providedIn: 'root'
})
export class PuzzlesService {

  //an instance for an puzzle interface
  puzzles: puzzle[]=[];

  users: user[]= [];

  // An array to store all the Puzzle Result
  puzzleResults:puzzleResult[]=[];

  private mainURL:string="https://bestify-java.herokuapp.com";

  //api for fetching puzzle from database
  private PuzzleUrl=this.mainURL+'/api/puzzles'

  // url='http://localhost:8080/api/puzzles';

  //api for fetching user from database
  private UserUrl=this.mainURL+'/api/users'

  //api for fetching Puzzle Results from database
  private PuzzleResultUrl=this.mainURL+'/api/puzzleresult'

  topScores=this.mainURL+"/api/puzzleresult/getTopScores"
  

  constructor(private httpClient: HttpClient) { }

  getPuzzles(): Observable<puzzle[]> {
    return this.httpClient.get<puzzle[]>(this.PuzzleUrl)
  }

  //DONE
  postPuzzle(data:puzzle): Observable<puzzle> {
    // console.log("in service");
     return this.httpClient.post<puzzle>(this.PuzzleUrl,data);
   }

   getUsers(): Observable<user[]> {
    return this.httpClient.get<user[]>(this.UserUrl)
  }

  getPuzzleResult(): Observable<puzzleResult[]> {
    return this.httpClient.get<puzzleResult[]>(this.PuzzleResultUrl)
  }
  getTopScore():Observable<any[]> {
    return this.httpClient.get<any[]>(this.topScores);

   }
}
