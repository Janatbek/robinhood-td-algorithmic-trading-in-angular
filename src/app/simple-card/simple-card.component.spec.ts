import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleCardComponent } from './simple-card.component';

describe('SimpleCardComponent', () => {
  let component: SimpleCardComponent;
  let fixture: ComponentFixture<SimpleCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
