import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTopScorerComponent } from './game-top-scorer.component';

describe('GameTopScorerComponent', () => {
  let component: GameTopScorerComponent;
  let fixture: ComponentFixture<GameTopScorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTopScorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTopScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
