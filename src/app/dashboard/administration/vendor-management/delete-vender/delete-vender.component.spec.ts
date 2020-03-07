import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVenderComponent } from './delete-vender.component';

describe('DeleteVenderComponent', () => {
  let component: DeleteVenderComponent;
  let fixture: ComponentFixture<DeleteVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
