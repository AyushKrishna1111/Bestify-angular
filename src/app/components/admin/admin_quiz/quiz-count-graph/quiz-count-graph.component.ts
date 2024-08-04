import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quizCategories } from 'src/app/interfaces/quiz_categories';
import { QuizService } from 'src/app/services/quiz.service';
import { GamesService } from 'src/app/services/games.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-quiz-count-graph',
  templateUrl: './quiz-count-graph.component.html',
  styleUrls: ['./quiz-count-graph.component.scss']
})
export class QuizCountGraphComponent implements OnInit {

  data: quizCategories[] = [];
  id: any;

  newdata: any[] = [];
  quizes: any[] = [];
  analysis: number[] = [];

  addQuizClicked: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.quizes;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public chartColors: any[] = [
    {
      backgroundColor: ["#018501","#850101"]
    }];

  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [
    { data: [] = this.analysis, label: 'Attempted Quiz Count' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private quizservice: QuizService, private route: ActivatedRoute, private router: Router, private gamesservice: GamesService) { }

  ngOnInit(): void {
  // console.log(this.route);

    this.quizservice.getQuizCat().subscribe((ret: any[]) => {
      // console.log(ret);
      this.data = ret;
    })

    this.gamesservice.getQuizAnalysis().subscribe((ret: any[]) => {
      // console.log("getQuizAnalysis ", ret);
      this.newdata = ret;
      // console.log(this.newdata.length);

      for (let i = 0; i < this.newdata.length; i++) {
        // this.barChartLabels.push(this.newdata[i].user_id);
        this.quizes.push(this.newdata[i].quiz_name);
        this.analysis.push(this.newdata[i].Analysis);

      }

    })
  }
  
  addQuizClick() {
    this.addQuizClicked = !this.addQuizClicked;
  }

}
