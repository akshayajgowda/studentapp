import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.CustomerPage } from './list.customer.page';

describe('List.CustomerPage', () => {
  let component: List.CustomerPage;
  let fixture: ComponentFixture<List.CustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.CustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.CustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
