import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StocklistCleanupComponent } from './stocklist-cleanup.component';

describe('StocklistCleanupComponent', () => {
  let component: StocklistCleanupComponent;
  let fixture: ComponentFixture<StocklistCleanupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StocklistCleanupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocklistCleanupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
