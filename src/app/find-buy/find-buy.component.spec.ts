import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FindBuyComponent } from './find-buy.component';

describe('FindBuyComponent', () => {
  let component: FindBuyComponent;
  let fixture: ComponentFixture<FindBuyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
