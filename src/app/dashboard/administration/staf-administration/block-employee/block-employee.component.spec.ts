import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEmployeeComponent } from './block-employee.component';

describe('BlockEmployeeComponent', () => {
  let component: BlockEmployeeComponent;
  let fixture: ComponentFixture<BlockEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
