import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubteamInfoComponent } from './subteam-info.component';

describe('SubteamInfoComponent', () => {
  let component: SubteamInfoComponent;
  let fixture: ComponentFixture<SubteamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubteamInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubteamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
