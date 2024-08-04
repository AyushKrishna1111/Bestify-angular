import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from 'src/app/components/user/user_game/tetris/tetris.constants';
// import { COLORS } from '../../defs';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.scss']
})
export class PixelComponent implements OnInit {
  @Input() value = ' ';

  constructor() { }

  ngOnInit(): void {
  }

  color() {
    return COLORS[this.value] || 'red';
  }
}
