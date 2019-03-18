import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.StudentPage } from './list.student.page';

describe('List.StudentPage', () => {
  let component: List.StudentPage;
  let fixture: ComponentFixture<List.StudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.StudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.StudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
