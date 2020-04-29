import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmarkComponent } from './showmark.component';

describe('ShowmarkComponent', () => {
  let component: ShowmarkComponent;
  let fixture: ComponentFixture<ShowmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
