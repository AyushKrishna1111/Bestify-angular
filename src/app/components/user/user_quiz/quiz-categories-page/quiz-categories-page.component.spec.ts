import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoriesPageComponent } from './quiz-categories-page.component';

describe('QuizCategoriesPageComponent', () => {
  let component: QuizCategoriesPageComponent;
  let fixture: ComponentFixture<QuizCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
