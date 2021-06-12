import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestResultsTableComponent } from './test-results-table.component';

describe('TestResultsTableComponent', () => {
  let component: TestResultsTableComponent;
  let fixture: ComponentFixture<TestResultsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
