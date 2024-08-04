import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestScoreManager{

  private ngxSnake  = 'ngx_snake';

  public store(score: number) {
    localStorage.setItem(this.ngxSnake, JSON.stringify({  'game_id':1,'best_score': score  }));
  }

  public retrieve() {
    let storage = this.parse();
    if (!storage) {
      this.store(0);
      storage = this.parse();
    }

    return storage.best_score;
  }

  private parse() {
    // return JSON.parse(localStorage.getItem(this.ngxSnake)||'');
    let snakeKey :any = localStorage.getItem(this.ngxSnake)
    return JSON.parse(snakeKey);
  }
}
