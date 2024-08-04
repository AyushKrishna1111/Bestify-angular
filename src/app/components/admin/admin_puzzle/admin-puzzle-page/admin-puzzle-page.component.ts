import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { puzzle } from 'src/app/classes/puzzles';
//import { puzzle } from 'src/app/interfaces/puzzle';
import { PuzzlesService } from 'src/app/services/puzzles.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-admin-puzzle-page',
  templateUrl: './admin-puzzle-page.component.html',
  styleUrls: ['./admin-puzzle-page.component.scss']
})
export class AdminPuzzlePageComponent implements OnInit {
  selectedTab:string="";

  constructor(private router: Router) { }

  ngOnInit(): void {

    let temp:string=this.router.routerState.snapshot.url;
    this.selectedTab=temp.substring(temp.lastIndexOf('/')+1);
  }
}
