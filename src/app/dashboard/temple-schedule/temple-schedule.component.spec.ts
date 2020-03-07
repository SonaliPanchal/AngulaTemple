import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleScheduleComponent } from './temple-schedule.component';

describe('TempleScheduleComponent', () => {
  let component: TempleScheduleComponent;
  let fixture: ComponentFixture<TempleScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
