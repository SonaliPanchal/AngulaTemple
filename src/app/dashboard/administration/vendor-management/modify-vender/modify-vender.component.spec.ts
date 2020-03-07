import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVenderComponent } from './modify-vender.component';

describe('ModifyVenderComponent', () => {
  let component: ModifyVenderComponent;
  let fixture: ComponentFixture<ModifyVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
