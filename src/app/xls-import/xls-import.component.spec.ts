import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { XlsImportComponent } from './xls-import.component';

describe('XlsImportComponent', () => {
  let component: XlsImportComponent;
  let fixture: ComponentFixture<XlsImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XlsImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
