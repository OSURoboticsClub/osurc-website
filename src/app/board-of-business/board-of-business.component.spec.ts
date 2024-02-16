import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOfBusinessComponent } from './board-of-business.component';

describe('BoardOfBusinessComponent', () => {
  let component: BoardOfBusinessComponent;
  let fixture: ComponentFixture<BoardOfBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOfBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOfBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
