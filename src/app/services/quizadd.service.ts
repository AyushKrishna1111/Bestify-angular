// COMPATIBLE WITH JAVA BACKEND

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../classes/Quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizaddService {
  private mainURL:string="https://bestify-java.herokuapp.com";

  quizURL: string = this.mainURL+'/api/quizes';
  quizCategoriesURL: string = this.mainURL+'/api/quizcategories';

  constructor(private http: HttpClient) {}

  postQuiz(quiz: Quiz): Observable<any> {
    // console.log("QuizaddService ; postQuiz() ; ");
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(quiz);
    // console.log(body);
    return this.http.post(this.quizURL, body, { headers: headers });
  }

  getQuizCategories() {
    // console.log("QuizaddService ; getQuizCategories() ")
    return this.http.get(this.quizCategoriesURL);
  }
}
