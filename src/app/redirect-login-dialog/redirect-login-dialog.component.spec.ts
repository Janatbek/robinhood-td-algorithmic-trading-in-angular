import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RedirectLoginDialogComponent } from './redirect-login-dialog.component';

describe('RedirectLoginDialogComponent', () => {
  let component: RedirectLoginDialogComponent;
  let fixture: ComponentFixture<RedirectLoginDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
