import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurryComponent } from './jurry.component';

describe('JurryComponent', () => {
  let component: JurryComponent;
  let fixture: ComponentFixture<JurryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
