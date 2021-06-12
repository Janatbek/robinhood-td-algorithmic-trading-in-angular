import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BbCardComponent } from './bb-card.component';

describe('BbCardComponent', () => {
  let component: BbCardComponent;
  let fixture: ComponentFixture<BbCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
