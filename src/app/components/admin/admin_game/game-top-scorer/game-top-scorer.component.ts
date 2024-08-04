import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-top-scorer',
  templateUrl: './game-top-scorer.component.html',
  styleUrls: ['./game-top-scorer.component.scss']
})
export class GameTopScorerComponent implements OnInit {
  
  scorers: any[] = [];
  scores: number[] = [];
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public barChartLabels: Label[] = this.scorers;
  public barChartType: ChartType = 'bar';
  
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [] = this.scores, label: 'Top scorer' }
  ];

  public chartColors: any[] = [
    {
      backgroundColor: ["#FF7360", "#6FC8CE"]
    }];
  
  public pieChartPlugins = [];

  constructor(private gamesservice: GamesService) { }

  ngOnInit(): void {

    this.gamesservice.getTopScorer().subscribe((data: any[]) => {
      // console.log(data);

      for (let i = 0; i < data.length; i++) {
        this.scorers.push(data[i].first_name);
        this.scores.push(data[i].score);
      }

    });

  }

}