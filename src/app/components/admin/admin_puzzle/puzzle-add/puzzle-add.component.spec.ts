import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleAddComponent } from './puzzle-add.component';

describe('PuzzleAddComponent', () => {
  let component: PuzzleAddComponent;
  let fixture: ComponentFixture<PuzzleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
