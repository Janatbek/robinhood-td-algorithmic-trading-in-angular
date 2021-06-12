import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrecogComponent } from './precog.component';

describe('PrecogComponent', () => {
  let component: PrecogComponent;
  let fixture: ComponentFixture<PrecogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
