import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokerhandComponent } from './pokerhand.component';

describe('PokerhandComponent', () => {
  let component: PokerhandComponent;
  let fixture: ComponentFixture<PokerhandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerhandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
