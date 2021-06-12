import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultOrderListsComponent } from './default-order-lists.component';

describe('DefaultOrderListsComponent', () => {
  let component: DefaultOrderListsComponent;
  let fixture: ComponentFixture<DefaultOrderListsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultOrderListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultOrderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
