import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatRoboticsComponent } from './combat-robotics.component';

describe('CombatRoboticsComponent', () => {
  let component: CombatRoboticsComponent;
  let fixture: ComponentFixture<CombatRoboticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatRoboticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatRoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
