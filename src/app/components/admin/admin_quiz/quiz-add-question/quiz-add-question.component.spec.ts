import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddQuestionComponent } from './quiz-add-question.component';

describe('QuizAddQuestionComponent', () => {
  let component: QuizAddQuestionComponent;
  let fixture: ComponentFixture<QuizAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
