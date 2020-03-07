import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafDashboardComponent } from './staf-dashboard.component';

describe('StafDashboardComponent', () => {
  let component: StafDashboardComponent;
  let fixture: ComponentFixture<StafDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
