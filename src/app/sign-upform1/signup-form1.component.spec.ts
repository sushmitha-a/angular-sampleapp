import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm1Component } from './signup-form1.component';

describe('SignupForm1Component', () => {
  let component: SignupForm1Component;
  let fixture: ComponentFixture<SignupForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
