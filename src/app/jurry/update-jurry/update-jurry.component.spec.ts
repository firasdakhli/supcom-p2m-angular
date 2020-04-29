import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJurryComponent } from './update-jurry.component';

describe('UpdateJurryComponent', () => {
  let component: UpdateJurryComponent;
  let fixture: ComponentFixture<UpdateJurryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJurryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
