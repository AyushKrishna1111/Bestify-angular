import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public snakeGameImageLink = "./assets/images/snake_game.png";
  public tetrisGameImageLink = "./assets/images/tetris_game.jpg";
  
  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  selectGame(game: string){
    this.router.navigate(['user/games/'+game]);
  }
}
