import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDashComponent } from './shopping-dash.component';

describe('ShoppingDashComponent', () => {
  let component: ShoppingDashComponent;
  let fixture: ComponentFixture<ShoppingDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
