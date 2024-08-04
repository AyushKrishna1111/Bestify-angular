import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit, OnDestroy {
  board: string[][] = [];
  private subscription: Subscription | null = null;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.board = this.gameService.renderNext();
    this.subscription = this.gameService.nextChanged.subscribe(
      (next: string[][]) => this.board = next
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
