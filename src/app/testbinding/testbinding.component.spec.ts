import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbindingComponent } from './testbinding.component';

describe('TestbindingComponent', () => {
  let component: TestbindingComponent;
  let fixture: ComponentFixture<TestbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
