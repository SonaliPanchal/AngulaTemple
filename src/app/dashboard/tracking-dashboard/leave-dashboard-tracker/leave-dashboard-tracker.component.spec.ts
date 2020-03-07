import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDashboardTrackerComponent } from './leave-dashboard-tracker.component';

describe('LeaveDashboardTrackerComponent', () => {
  let component: LeaveDashboardTrackerComponent;
  let fixture: ComponentFixture<LeaveDashboardTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDashboardTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDashboardTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
