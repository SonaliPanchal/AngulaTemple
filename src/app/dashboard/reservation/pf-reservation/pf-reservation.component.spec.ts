import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfReservationComponent } from './pf-reservation.component';

describe('PfReservationComponent', () => {
  let component: PfReservationComponent;
  let fixture: ComponentFixture<PfReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
