import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Score } from 'src/app/classes/score';
import { ScoreService } from 'src/app/services/score.service';
import { LoginDataService } from 'src/app/services/login-data-service.service';
import { formatDate } from '@angular/common';
import { user } from 'src/app/interfaces/user';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  data:user =this.tokenService.getUser();

  constructor(
    private gameService: GameService,  private scoreService : ScoreService,
    private tokenService : LoginDataService
  ) { }

  ngOnInit(): void {
  }

  getScore(): number {
    
    return this.gameService.score;
  }

  getTimeElapsed(): number {
    return Math.ceil(this.gameService.timeElapsed / 1000);
  }

  getSpeed(): number {
    return this.gameService.speed;
  }

  togglePause(): void {
    this.gameService.togglePause();
  }

  reset(): void {
  
    let tetrisScore = new Score( 
      this.tokenService.getUser().user_id,
      2,
      this.gameService.score,
      formatDate(new Date(), 'yyyy-MM-dd','en_US')
    )
    this.scoreService.postGameScore(tetrisScore).subscribe((reponse)=>{
      //console.log("Tetris Response : ",reponse);
      // this.route.navigate(['admin']);
     });

    this.gameService.init();
  }

  isPaused(): boolean {
    
    return this.gameService.isPaused();
  }

  isOver(): boolean {
    
    //localStorage.setItem('tetris_score',this.gameService.score);
    localStorage.setItem('tetris', JSON.stringify({ 'game_id':2, 'best_score': this.gameService.score  }));
   
    return this.gameService.isOver;
  }
  
  

}
