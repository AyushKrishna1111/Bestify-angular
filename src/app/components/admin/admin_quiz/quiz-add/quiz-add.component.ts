import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Quiz } from 'src/app/classes/Quiz';
import { QuizaddService } from 'src/app/services/quizadd.service';
import { Question } from 'src/app/classes/Question';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.scss']
})
export class QuizAddComponent implements OnInit {

// used by modal
closeResult: string | undefined;

// used by modal
@ViewChild('modalcontent', { read: TemplateRef })
modalcontent!: TemplateRef<any>;

quiz: Quiz = new Quiz();
ques: Question;
categories: any = [];

// For Setting Custom errors
hourError = '';
minuteError = '';
secondError = '';
questionError = '';
opt1Error = '';
opt2Error = '';
opt3Error = '';
opt4Error = '';
corAnsError = '';
timeError = '';
noQuestionAdded: boolean = false;

constructor(private quizAddService: QuizaddService, private modalService: NgbModal) {
  this.quiz = new Quiz();
  this.ques = new Question();
}

ngOnInit(): void {
  
  // console.log("QuizAddComponent ; ngOnInit ; ");
  this.quizAddService.getQuizCategories().subscribe((data: any) => {
    // console.log(data);
    this.categories = data;
  });
}

addQuestion(): void {
  this.quiz.questions.push(new Question());
}

onAddButtonClick() {
  //console.log("adding on button click");
  // console.log(this.ques);
  let passed: boolean = this.validateQuestion();
  if (!passed) {
    return;
  }
  this.quiz.questions.push(this.ques);
  this.ques = new Question();
}

removeQuestion(index: number) {
  //console.log(index);
  this.quiz.questions.splice(index, 1);
}

addQuestionID(quiz: Quiz) {
  let count: number = 1;
  quiz.questions.forEach((element) => {
    element.quesId = count++;
  });
}

validateHour() {
  if (this.quiz.hr < 0) {
    this.hourError = 'Invalid Value. Hours cannot be negative';
  } else {
    this.hourError = '';
  }
}

validateMinute() {
  if (this.quiz.min < 0 || this.quiz.min > 59) {
    this.minuteError = 'Invalid Value. Valid range is 0 - 59';
  } else {
    this.minuteError = '';
  }
}

validateSeconds() {
  if (this.quiz.sec < 0 || this.quiz.sec > 59) {
    this.secondError = 'Invalid Value. Valid range is 0 - 59';
  } else {
    this.secondError = '';
  }
}

validateQuestion(): boolean {
  this.questionError = '';
  this.opt1Error = '';
  this.opt2Error = '';
  this.opt3Error = '';
  this.opt4Error = '';
  this.corAnsError = '';

  if (this.ques.question.length === 0) {
    this.questionError = 'Question cannot be empty';
    return false;
  }
  if (this.ques.option1.length === 0) {
    this.opt1Error = 'Option cannot be empty';
    return false;
  }
  if (this.ques.option2.length === 0) {
    this.opt2Error = 'Option cannot be empty';
    return false;
  }
  if (this.ques.option3.length === 0) {
    this.opt3Error = 'Option cannot be empty';
    return false;
  }
  if (this.ques.option4.length === 0) {
    this.opt4Error = 'Option cannot be empty';
    return false;
  }
  if (this.ques.correctAnswer.length === 0) {
    this.corAnsError = 'Select correct answer for the question';
    return false;
  }

  return true;
}

onSubmit(quizForm: any) {
 // console.log(quizForm);
  let passed: boolean = this.validateFormBeforeSubmit();
  if (!passed || quizForm.form.status === 'INVALID') {
    alert('Errors found in the form.');
    return;
  }

  this.addQuestionID(this.quiz);
  this.quiz.quiz_time =
    this.quiz.hr * 3600 + this.quiz.min * 60 + this.quiz.sec;
  this.quizAddService.postQuiz(this.quiz).subscribe((data: any) => {
    this.openVerticallyCentered(this.modalcontent);
  });

  // resetting form fields
  this.resetForm();
}

resetForm() {
  this.ques.reset();
  this.quiz.reset();
}

validateFormBeforeSubmit(): boolean {
  this.timeError = '';
  this.noQuestionAdded = false;

  if (this.quiz.questions.length === 0) {
    this.noQuestionAdded = true;
    return false;
  }

  return true;
}

openVerticallyCentered(content:any) {
  // console.log(content);
  this.modalService.open(content, { size: 'sm' });
}

}
