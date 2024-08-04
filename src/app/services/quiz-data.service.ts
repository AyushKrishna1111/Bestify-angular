import { Injectable, ElementRef } from '@angular/core';
// import { State } from './classes/State';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Quiz } from './classes/Quiz';
// import { QuizeResult } from './classes/QuizeResult';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  // For NodeJS
  private mainURL:string="https://bestify-java.herokuapp.com";

  stateURL: string = this.mainURL+'/api/state';
  quizResultURL: string = this.mainURL+'/api/quizeresult/quizres';
  quizURL: string = this.mainURL+'/api/quizes';

  timerDiv: ElementRef;
  state: any;

  constructor(private http: HttpClient) {
    this.timerDiv = {} as ElementRef;
  }

  getQuiz(quizId: number): Observable<any> {
    return this.http.get(this.quizURL + '/findOne/' + quizId);
  }

  getState(quizID: number, userID: number) {
    return this.http.get(
      this.stateURL + '/userid=' + userID + '&quizid=' + quizID
    );
  }

  getQuizeResult(quizID: number, userID: number) {
    // console.log("Quiz id : " + quizID + " User Id : " + userID);
    return this.http.get(
      this.quizResultURL + '/userid=' + userID + '&quizid=' + quizID
    );
  }

  postState(auto: number) {
    this.state.automatic = auto;
    let timerText = this.timerDiv.nativeElement.outerText;

    if (timerText.length === 0) {
      this.state.timer = 0;
    } else {
      this.state.timer =
        parseInt(timerText.substring(0, timerText.indexOf(':'))) * 60 +
        parseInt(timerText.substring(timerText.indexOf(':') + 1));
    }

    let postURL: string = this.stateURL;
    if (this.state.state_id !== undefined) {
      postURL += '/' + this.state.state_id;
    }

    const headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(this.state);
      // console.log("Posting state -> "+body);
    
    this.http.post(postURL, body, { headers: headers })
    .subscribe((data:any) => {
      if (this.state.state_id === undefined) {
        this.state.state_id = data.state_id;
      }
      //  console.log("GOT STATE DATA BACK-> ",data);
    },
    (err:any)=>{
      // console.log("error in quiz state url",err);
    });
  }

  deleteState(state: any) {
    this.http
      .delete(this.stateURL + '/' + state.state_id)
      .subscribe((data: any) => {
        //console.log("responce for delete state",data);
      });
  }

  postQuizResult(quizResult: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(quizResult);
    // console.log(body);

      this.http
        .post(this.quizResultURL, body, { headers: headers })
        .subscribe((data: any) => {
          // console.log("got posted quiz responce -> "+JSON.stringify(data));
        },
        (error:any)=>{
          // console.log("error in quiz result url",error);
        });
  }
}
