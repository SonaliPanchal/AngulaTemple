import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfbTrackerComponent } from './pfb-tracker.component';

describe('PfbTrackerComponent', () => {
  let component: PfbTrackerComponent;
  let fixture: ComponentFixture<PfbTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfbTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfbTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
