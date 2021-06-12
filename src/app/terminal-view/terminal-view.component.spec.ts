import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TerminalViewComponent } from './terminal-view.component';

describe('TerminalViewComponent', () => {
  let component: TerminalViewComponent;
  let fixture: ComponentFixture<TerminalViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
