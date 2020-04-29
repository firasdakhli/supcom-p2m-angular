import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJurryComponent } from './show-jurry.component';

describe('ShowJurryComponent', () => {
  let component: ShowJurryComponent;
  let fixture: ComponentFixture<ShowJurryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowJurryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
