import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UichangeComponent } from './uichange.component';

describe('UichangeComponent', () => {
  let component: UichangeComponent;
  let fixture: ComponentFixture<UichangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UichangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UichangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
