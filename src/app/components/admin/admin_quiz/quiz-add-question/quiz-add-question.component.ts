import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/classes/Question';

@Component({
  selector: 'app-quiz-add-question',
  templateUrl: './quiz-add-question.component.html',
  styleUrls: ['./quiz-add-question.component.scss']
})
export class QuizAddQuestionComponent implements OnInit {
  @Input()
  ques: Question;

  @Input()
  index: number;

  @Output('remove')
  emitter = new EventEmitter<number>();

  constructor() {
    this.ques = {} as Question;
    this.index = -1;
  }

  ngOnInit(): void {}

  remove() {
    //console.log(event);
    this.emitter.emit(this.index);
  }
}

