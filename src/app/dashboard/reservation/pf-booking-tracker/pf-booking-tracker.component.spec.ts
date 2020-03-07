import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfBookingTrackerComponent } from './pf-booking-tracker.component';

describe('PfBookingTrackerComponent', () => {
  let component: PfBookingTrackerComponent;
  let fixture: ComponentFixture<PfBookingTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfBookingTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfBookingTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
