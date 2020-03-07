import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentTrackerComponent } from './invoice-payment-tracker.component';

describe('InvoicePaymentTrackerComponent', () => {
  let component: InvoicePaymentTrackerComponent;
  let fixture: ComponentFixture<InvoicePaymentTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePaymentTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaymentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
