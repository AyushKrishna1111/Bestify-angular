import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss']
})
export class GlassComponent implements OnInit, OnDestroy {
  board: string[][] = [];
  private subscription?: Subscription;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.board = this.gameService.renderGlass();
    this.subscription = this.gameService.glassChanged.subscribe(
      (next: string[][]) => this.board = next
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp': this.gameService.rotate(); break;
      case 'ArrowDown': this.gameService.step(); break;
      case 'ArrowLeft': this.gameService.moveLeft(); break;
      case 'ArrowRight': this.gameService.moveRight(); break;
      case 'p': this.gameService.togglePause(); break;
      case ' ': this.gameService.toggleAccelerate(); break;
      case '=': this.gameService.speed++; break;
      case '-': this.gameService.speed--; break;
    }
  }

}
