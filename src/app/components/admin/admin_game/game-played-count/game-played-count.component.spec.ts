import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayedCountComponent } from './game-played-count.component';

describe('GamePlayedCountComponent', () => {
  let component: GamePlayedCountComponent;
  let fixture: ComponentFixture<GamePlayedCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlayedCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
