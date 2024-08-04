import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCountGraphComponent } from './quiz-count-graph.component';

describe('QuizCountGraphComponent', () => {
  let component: QuizCountGraphComponent;
  let fixture: ComponentFixture<QuizCountGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCountGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
