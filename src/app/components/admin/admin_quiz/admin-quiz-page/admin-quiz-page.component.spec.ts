import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizPageComponent } from './admin-quiz-page.component';

describe('AdminQuizPageComponent', () => {
  let component: AdminQuizPageComponent;
  let fixture: ComponentFixture<AdminQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuizPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
