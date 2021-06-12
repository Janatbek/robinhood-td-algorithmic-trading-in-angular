import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhTableComponent } from './rh-table.component';

describe('RhTableComponent', () => {
  let component: RhTableComponent;
  let fixture: ComponentFixture<RhTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
