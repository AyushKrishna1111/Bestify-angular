import { Component, OnInit, ViewChild, ElementRef, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Quiz } from 'src/app/classes/Quiz';
import { QuizDataService } from 'src/app/services/quiz-data.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { QuizeResult } from 'src/app/classes/QuizeResult';
import { State } from 'src/app/classes/State';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginDataService } from 'src/app/services/login-data-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import { user } from 'src/app/interfaces/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.scss']
})
export class QuizDisplayComponent implements OnInit,AfterViewInit,OnDestroy {
  
  // used by modal
  closeResult: string | undefined;

  // used by modal
  @ViewChild('modalcontent', { read: TemplateRef })
  modalcontent!: TemplateRef<any>;
  
  @ViewChild('timer')
  timerDiv: ElementRef = {} as ElementRef;

  timer: any;

  showQuestions: boolean = false;

  quizResult: any;
  quiz: Quiz = {} as Quiz;

  quidID: number;
  userID: number;

  isFav: boolean = false;

  mainButtonText: string;
  disableMainButton: boolean = true;

  initialTime: number = -1;
  pausedTime: number = -1;
  timeString: string = '';

  data: user = this.tokenService.getUser();

  // User modal show variables;
  // hasPreviousQuizResult: boolean = false;

  // Modal variables
  showModal: boolean = false;
  modalHeader: string = '';
  modalBody: string = '';
  imagePath: string = '';

  constructor(
    public quizDataService: QuizDataService,
    private favservice: FavouriteService,
    private route: ActivatedRoute,
    private tokenService: LoginDataService,
    private modalService: NgbModal,
  ) {
    this.quidID = this.route.snapshot.params.quiz_id;
    this.userID = tokenService.getUser().user_id;
    this.mainButtonText = 'Start Quiz';
  }

  ngOnInit(): void {
    this.quizDataService.getQuiz(this.quidID)
    .subscribe(
      (data: any) => {
      //console.log("GOT quiz -> ",data);
      this.quiz=data;
      var v=data.questions.replaceAll('\\','');
      this.quiz.questions=JSON.parse(v);
      this.getSavedState();
      this.quizResult = new QuizeResult(this.userID, this.quidID);
    },
    (err:any)=>{
      console.log("Error in getting quiz from server ; ",err);
    });

    // this.favservice
    //   .getFavourite(this.quidID, this.userID)
    //   .subscribe((data: any) => {
    //     console.log('Favorite data ->', data);
    //     if (data !== null && data[0].length!=0 && data[0][0].status === 1) 
    //     this.isFav = true;
    //   },
    //   (err:any) =>{
    //     console.log("Error in getting favorites ; ",err);
    //   });
  }

  ngAfterViewInit() {
    this.quizDataService.timerDiv = this.timerDiv;
  }

  ngOnDestroy(): void{
    // console.log("on destroy");
    clearInterval(this.timer);
  }

  // getPreviousQuizResult() {
  //   this.quizDataService
  //     .getQuizeResult(this.quidID, this.userID)
  //     .subscribe((data: any) => {
  //       console.log("got quiz result -> ",data);
  //       if (data !== null && data[0].length !== 0) {
  //         this.quizResult = data[0][0];
  //         this.hasPreviousQuizResult = true;
  //         console.log("Previous quiz result found = ",this.quizResult);
  //       } else {
  //         this.quizResult = new QuizeResult(this.userID, this.quidID);
  //         this.hasPreviousQuizResult = false;
  //         console.log("No previous quiz result found");
  //       }
  //       this.getSavedState();
  //     },
  //     (err:any)=>{
  //       console.log("Error in getting previous result request ; ",err);
  //       this.getSavedState();
  //       this.quizResult = new QuizeResult(this.userID, this.quidID);
  //       this.hasPreviousQuizResult = false;
  //     });
  // }

  getSavedState() {
    this.quizDataService
      .getState(this.quidID, this.userID)
      .subscribe((data: any) => {
        // console.log('State Data ->', data);

        if (data.state_id !== undefined) {
          this.quizDataService.state = data;
         
          var v=data.answers.replaceAll('\\','');
          this.quizDataService.state.answers=JSON.parse(v);

          this.showModalFunc(
              'Resuming Quiz',
              'Click on Start Quiz to resume your quiz from last saved point',
              "./assets/images/resume.png"
            );
      
          //  console.log("Previous state found -> "+ JSON.stringify(this.quizDataService.state));
        } 
        else // if previous state is not found 
        {
          let newState: State = new State(
            this.userID,
            this.quidID,
          );
          newState.initializeSaveData(this.quiz.questions.length);
          this.quizDataService.state = newState;

          this.showModalFunc(
            'Autosave Feature',
            'Quizzes have auto-save feature which allows saving the quiz state(selected answers and remaining time) whenever user answers any question. This allows user to return back to the same state if he/she quits the quiz in between. You can manually save and exit any time by clicking on "Pause Quiz" button. ',
            "./assets/images/autosave.png"
          );

          //  console.log("No previous state found");
        }

        this.disableMainButton = false;
        this.initialTime = this.getTime();
        this.timeString = this.getTimeInHMSFormat(this.initialTime);
      },
      (err:any) => {
        // console.log("error from quiz state url ; ",err);
        this.disableMainButton = false;
        this.initialTime = this.getTime();
        this.timeString = this.getTimeInHMSFormat(this.initialTime);

        let newState: State = new State(
          this.userID,
          this.quidID,
        );
        newState.initializeSaveData(this.quiz.questions.length);
        this.quizDataService.state = newState;
      });
  }

  onMainButtonClick() {
    if (this.mainButtonText === 'Start Quiz') {
      this.showQuestions = true;
      this.startTimer(this.initialTime, this.timerDiv);
      this.mainButtonText = 'Pause Quiz';
    } else if (this.mainButtonText === 'Pause Quiz') {
      this.showQuestions = false;
      this.quizDataService.postState(0);
      clearInterval(this.timer);
      let timerText = this.timerDiv.nativeElement.outerText;
      
      this.pausedTime =
        parseInt(timerText.substring(0, timerText.indexOf(':'))) * 60 +
        parseInt(timerText.substring(timerText.indexOf(':') + 1));
      
      this.timerDiv.nativeElement.innerHTML = '';
      this.mainButtonText = 'Resume Quiz';
    } else if (this.mainButtonText === 'Resume Quiz') {
      this.mainButtonText = 'Pause Quiz';
      this.startTimer(this.pausedTime, this.timerDiv);
      this.showQuestions = true;
    }
  }

  getTime(): number {
    
    if (this.quizDataService.state!==undefined && this.quizDataService.state.timer !== -1)
      return this.quizDataService.state.timer;
    else 
    return this.quiz.quiz_time;
  }

  startTimer(duration: number, timerDiv: ElementRef) {
    // console.log(duration);
    if (duration === 0) return;

    let timerDuration: number = duration;
    var minutes: string, seconds: string;
    let min: number,
      sec: number = 0;
    this.timer = setInterval(() => {
      if (timerDuration <= 0) {
        this.submitQuiz();
      }

      min = Math.floor(timerDuration / 60);
      sec = timerDuration % 60;

      minutes = min < 10 ? '0' + min : min.toString();
      seconds = sec < 10 ? '0' + sec : sec.toString();

      if (timerDuration != 0)
        timerDiv.nativeElement.innerHTML = minutes + ':' + seconds;

      --timerDuration;
    }, 1000);
  }

  calculateScore(): number {
    let score: number = 0;
    this.quizDataService.state.answers.forEach((element: any) => {
      if (this.quiz.questions[element.quesId - 1].correctAnswer === element.ans)
        score += 1;
    });
    return score;
  }

  submitQuiz() {
    // console.log("Quiz submitted");
    clearInterval(this.timer);
    this.showQuestions = false;
    this.timerDiv.nativeElement.innerHTML = '';
    this.quizDataService.deleteState(this.quizDataService.state);
    this.setQuizResult();

    this.quizDataService.postQuizResult(this.quizResult);
    this.mainButtonText = 'Quiz Submitted';
    this.showModalFunc(
      'Quiz Submitted',
      'Your answers have been submitted.',
      "./assets/images/submittedquiz.png"
    );
  }

  // setting quiz_result fields
  setQuizResult() {
    // console.log(this.quizResult);
    let sc = this.calculateScore();
    this.quizResult.score = sc;
    this.quizResult.out_off = this.quiz.questions.length;
    if (sc < 0.6 * this.quiz.questions.length) this.quizResult.status = 0;
    else this.quizResult.status = 1;
    this.quizResult.date_played = new Date().toJSON().slice(0, 10);
  }

  onToggleFavButton(): void {
    this.isFav = !this.isFav;

    const fav = {
      activity_id: this.quidID,
      user_id: this.userID,
      status: this.isFav,
    };

    if (this.isFav == true) {
      this.favservice.insertFav(fav).subscribe((res) => {});
    } else {
      this.favservice.DeleteFav(this.quidID, this.userID).subscribe((res) => {
        // console.log(res);
      });
    }
  }

  getTimeInHMSFormat(time: number) {
    let h: number = time / 3600;
    let hours = Math.floor(h);
    let rem: number = time % 3600;
    let m: number = rem / 60;
    let min: number = Math.floor(m);
    let sec: number = rem % 60;
    // console.log(h,hours,m,min,sec);
    let str: string = '';

    if (hours === 0) {
      if (min === 0) {
        str = sec + ' sec';
      } else {
        str = min + ' min ' + sec + ' sec';
      }
    } else {
      str = hours + ' hr ' + min + ' min ' + sec + 'sec';
    }

    return str;
  }

  showModalFunc(heading: string, content: string, img: string) {
    this.modalHeader = heading;
    this.modalBody = content;
    this.imagePath = img;
    this.openVerticallyCentered(this.modalcontent);
  }

  openVerticallyCentered(content:any) {
    // console.log(content);
    this.modalService.open(content, { centered: true });
  }

}
