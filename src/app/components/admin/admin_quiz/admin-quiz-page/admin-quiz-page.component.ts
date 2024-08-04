import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quizCategories } from 'src/app/interfaces/quiz_categories';
import { QuizService } from 'src/app/services/quiz.service';
import { GamesService } from 'src/app/services/games.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin-quiz-page',
  templateUrl: './admin-quiz-page.component.html',
  styleUrls: ['./admin-quiz-page.component.scss']
})
export class AdminQuizPageComponent implements OnInit {

  // this is required for setting 'active' class on each <a> tag ( present in tabs ) which will show which tab is currently open/active
  selectedTab:string="";

  constructor(private quizservice: QuizService, private route: ActivatedRoute, private router: Router, private gamesservice: GamesService) { }

  ngOnInit(): void {
  //console.log(this.router.routerState);
  let temp:string=this.router.routerState.snapshot.url;
  this.selectedTab=temp.substring(temp.lastIndexOf('/')+1);
  // console.log("selectedTab -> "+this.selectedTab);
  }

}
