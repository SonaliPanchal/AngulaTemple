import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVenderComponent } from './block-vender.component';

describe('BlockVenderComponent', () => {
  let component: BlockVenderComponent;
  let fixture: ComponentFixture<BlockVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
