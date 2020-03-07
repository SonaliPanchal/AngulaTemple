import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoMaintenanceComponent } from './po-maintenance.component';

describe('PoMaintenanceComponent', () => {
  let component: PoMaintenanceComponent;
  let fixture: ComponentFixture<PoMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
