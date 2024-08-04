import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDisplayQuestionComponent } from './quiz-display-question.component';

describe('QuizDisplayQuestionComponent', () => {
  let component: QuizDisplayQuestionComponent;
  let fixture: ComponentFixture<QuizDisplayQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDisplayQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDisplayQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
