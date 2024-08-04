import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { puzzleresult } from 'src/app/classes/puzzleresult';
import { user } from 'src/app/interfaces/user';
import { puzzleResult } from 'src/app/interfaces/puzzle_result';
import { PuzzlesService } from 'src/app/services/puzzles.service';
import { LoginDataService } from 'src/app/services/login-data-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-puzzle-page',
  templateUrl: './puzzle-page.component.html',
  styleUrls: ['./puzzle-page.component.scss']
})
export class PuzzlePageComponent implements OnInit {

  @ViewChild('op1') op1!: ElementRef;

  puzzle: any;

  @Input()
  score: number = 0;

  @Input()
  public index: number = 1;

  puzzle_Id: any;
  puzzle_Answer: any;
  //puzzle_Answerdb:any;
  answer: any;
  isCorrect: boolean | undefined;
  data: any;
  user_Id: number = 1;
  showanswer: boolean = false;
  item: any;

  users: user[] = [];
  user: user | undefined;

  // getting the id of user from local storage
  //id: any = localStorage.getItem("user_id");

  // An array to store all the Puzzle Result
  puzzlesResults: puzzleResult[] = [];

  // variable to store an specific puzzle Result field
  specificResult: puzzleResult | undefined;

  disableNextButton:boolean=false;
  disablePreviousButton:boolean=false;

  constructor(private puzzleService: PuzzleService, private tokenStorage: LoginDataService, private route: ActivatedRoute, private r: Router, private puzzlesService: PuzzlesService) {}

  ngOnInit(): void {

    this.puzzleService.getPuzzles().subscribe(
      (response) => {                           //next() callback
        //next() callback
      //  console.log('response received');
        var withDisebled = response.map((response) => ({
          ...response,
          isDisabled: null,
        }));
        this.puzzle = withDisebled;
        this.item = this.puzzle[0];

        if(this.puzzle.length === this.index)
        this.disableNextButton=true;

        if (this.index === 1)
        this.disablePreviousButton=true;
       // console.log(this.puzzle);
      })


  }
  
  next() {
  //  console.log('puzzlelength' + this.puzzle.length);

    if(this.disablePreviousButton)
    this.disablePreviousButton=false;

    if (this.puzzle.length > this.index) {
      this.index++;
    }

    if(this.puzzle.length === this.index)
    this.disableNextButton=true;
  
  }

  pre() {
  //   console.log('puzzlelength' + this.puzzle.length);

  if(this.disableNextButton)
    this.disableNextButton=false;

    if (this.index > 1) {
      this.index--;
      this.item = this.puzzle[this.index];
    }

    if (this.index === 1)
    this.disablePreviousButton=true;

  }

  checkAns(puzzle_idf: number) {
    var str: string = puzzle_idf.toString();
    // this.op1.nativeElement.innerHTML ="something";
    var id = <HTMLInputElement>document.getElementById(str);
    //console.log(Root);
    this.puzzle_Id = puzzle_idf;
   // console.log(puzzle_idf);

    for (let i = 0; i < this.puzzle.length; i++) {
      if (this.puzzle[i].puzzle_id == puzzle_idf) {
        //console.log(this.answer);
        //console.log(this.puzzle[i].puzzle_answer);
        this.puzzle[i].isDisabled = true;
        //   console.log(puzzle_idf);
        // console.log(this.puzzle[i].puzzle_id);
        if (this.answer.toLowerCase() === this.puzzle[i].puzzle_answer.toLowerCase()) {
          //   console.log('found');
          this.score = this.score + 1;
          id.innerHTML = '<h1>Your Answer is Correct</h1>';
        } else {
          // console.log('answer is incorrect');
          id.innerHTML =
            '<h1>Your Answer is Incorrect</h1> ';
        }
      }
    }
  }


  post() {
    this.user_Id = this.tokenStorage.getUser().user_id

    const puzzleResults = new puzzleresult(this.user_Id, this.score, formatDate(new Date(), 'yyyy-MM-dd', 'en_US'))
    this.puzzleService.postResult(puzzleResults).subscribe((puzzleResultRes) => {
      //  alert(puzzleResultRes);
    })

   // console.log(this.score);
    this.r.navigate(['/user']);

  }

  OnInput(event: any) {
    this.answer = event.target.value;
  }
  
  show() {
    this.showanswer = true;
  }

}