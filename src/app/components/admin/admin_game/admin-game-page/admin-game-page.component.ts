import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-admin-game-page',
  templateUrl: './admin-game-page.component.html',
  styleUrls: ['./admin-game-page.component.scss']
})
export class AdminGamePageComponent implements OnInit {

  selectedTab:string="";

  constructor(private gamesservice: GamesService, private router: Router) { }

  ngOnInit(): void {

    let temp:string=this.router.routerState.snapshot.url;
    this.selectedTab=temp.substring(temp.lastIndexOf('/')+1);
  }

}