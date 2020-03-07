import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestReservationComponent } from './priest-reservation.component';

describe('PriestReservationComponent', () => {
  let component: PriestReservationComponent;
  let fixture: ComponentFixture<PriestReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriestReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
