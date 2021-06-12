import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PieAlloctComponent } from './pie-alloct.component';

describe('PieAlloctComponent', () => {
  let component: PieAlloctComponent;
  let fixture: ComponentFixture<PieAlloctComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PieAlloctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieAlloctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
