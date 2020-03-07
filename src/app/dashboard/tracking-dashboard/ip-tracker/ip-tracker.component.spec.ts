import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTrackerComponent } from './ip-tracker.component';

describe('IpTrackerComponent', () => {
  let component: IpTrackerComponent;
  let fixture: ComponentFixture<IpTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
