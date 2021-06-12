import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhInputComponent } from './rh-input.component';

describe('RhInputComponent', () => {
  let component: RhInputComponent;
  let fixture: ComponentFixture<RhInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
