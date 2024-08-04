
import { Injectable } from '@angular/core';
import { puzzle } from '../classes/puzzle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  puzzle=new puzzle();
 //puzzleResult=new puzzleresult();
postScore:any;
 id:any;

 private mainURL:string="https://bestify-java.herokuapp.com";

 url=this.mainURL+'/api/puzzles';
 result=this.mainURL+"/api/puzzleresult/";
 topScores=this.mainURL+"/api/puzzleresult/getTopScores"
  
  constructor(private httpClient: HttpClient) { }
  
  postData(data:puzzle): Observable<puzzle> {
    // console.log("in service");
     return this.httpClient.post<puzzle>(this.url,data);
   }
   
   //DONE
   getPuzzles(): Observable<puzzle[]> {
    return this.httpClient.get<puzzle[]>(this.url);
   }
   
   postResult(score:any): Observable<any> {
    // console.log("in service");
     return this.httpClient.post<any>(this.result,score);
   }
   
   getById(id:number): Observable<puzzle[]> {
    return this.httpClient.get<puzzle[]>(this.url+id);

   }
   
   getTopScore():Observable<any[]> {
    return this.httpClient.get<any[]>(this.topScores);
   }
}
