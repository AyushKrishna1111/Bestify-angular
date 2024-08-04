import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPuzzlePageComponent } from './admin-puzzle-page.component';

describe('AdminPuzzlePageComponent', () => {
  let component: AdminPuzzlePageComponent;
  let fixture: ComponentFixture<AdminPuzzlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPuzzlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuzzlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
