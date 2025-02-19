import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingControlsComponent } from './setting-controls.component';

describe('SettingControlsComponent', () => {
  let component: SettingControlsComponent;
  let fixture: ComponentFixture<SettingControlsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
