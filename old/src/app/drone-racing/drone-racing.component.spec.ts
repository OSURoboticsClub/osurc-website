import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneRacingComponent } from './drone-racing.component';

describe('DroneRacingComponent', () => {
  let component: DroneRacingComponent;
  let fixture: ComponentFixture<DroneRacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneRacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
