import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafAdministrationComponent } from './staf-administration.component';

describe('StafAdministrationComponent', () => {
  let component: StafAdministrationComponent;
  let fixture: ComponentFixture<StafAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
