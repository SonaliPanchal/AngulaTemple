import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalProgramInvoiceComponent } from './cultural-program-invoice.component';

describe('CulturalProgramInvoiceComponent', () => {
  let component: CulturalProgramInvoiceComponent;
  let fixture: ComponentFixture<CulturalProgramInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalProgramInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalProgramInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
