import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/classes/Question';
import { State } from 'src/app/classes/State';
import { QuizDataService } from 'src/app/services/quiz-data.service';

@Component({
  selector: 'app-quiz-display-question',
  templateUrl: './quiz-display-question.component.html',
  styleUrls: ['./quiz-display-question.component.scss']
})
export class QuizDisplayQuestionComponent implements OnInit {
  disabled: boolean;
  wrongAns: string;
  correctAns: string;

  @Input()
  quesobject: Question = {} as Question;

  @Input()
  state: any = {} as State;

  constructor(private quizDataService: QuizDataService) {
    this.disabled = false;
    this.wrongAns = '';
    this.correctAns = '';
  }

  ngOnInit(): void {
    // console.log(JSON.stringify(this.quizData.state));
    if (this.state.answers[this.quesobject.quesId - 1].ans !== '') {
      //console.log(element);
      this.disabled = true;
      if (
        this.state.answers[this.quesobject.quesId - 1].ans ===
        this.quesobject.correctAnswer
      )
        this.correctAns = this.quesobject.correctAnswer;
      else {
        this.correctAns = this.quesobject.correctAnswer;
        this.wrongAns = this.state.answers[this.quesobject.quesId - 1].ans;
      }
    }
  }

  selected(value: string) {
    // console.log(value);
    this.disabled = true;
    this.state.answers[this.quesobject.quesId - 1].ans = value;
    // console.log("In selected -> "+JSON.stringify(this.state));
    if (value === this.quesobject.correctAnswer) {
      this.correctAns = value;
    } else {
      this.wrongAns = value;
      this.correctAns = this.quesobject.correctAnswer;
    }
    this.quizDataService.postState(1);
  }
}
