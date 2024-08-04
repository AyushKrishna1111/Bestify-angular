import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-played-count',
  templateUrl: './game-played-count.component.html',
  styleUrls: ['./game-played-count.component.scss']
})
export class GamePlayedCountComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public chartColors: any[] = [
    {
      backgroundColor: ["#FF7360", "#6FC8CE"]
    }];
  public pieChartPlugins = [];

  constructor(private gamesservice: GamesService) { }

  ngOnInit(): void {

    this.gamesservice.getPieGame().subscribe((piedata: any[]) => {
      // console.log(ret);
      for (let i = 0; i < piedata.length; i++) {
        this.pieChartLabels.push(piedata[i].game_name);
        this.pieChartData.push(piedata[i].Count);
      }

    });
  }

}
