import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJurryComponent } from './add-jurry.component';

describe('AddJurryComponent', () => {
  let component: AddJurryComponent;
  let fixture: ComponentFixture<AddJurryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJurryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
