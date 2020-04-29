import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJurryComponent } from './delete-jurry.component';

describe('DeleteJurryComponent', () => {
  let component: DeleteJurryComponent;
  let fixture: ComponentFixture<DeleteJurryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJurryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
