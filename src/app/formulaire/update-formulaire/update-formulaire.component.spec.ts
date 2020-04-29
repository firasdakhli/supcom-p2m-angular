import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormulaireComponent } from './update-formulaire.component';

describe('UpdateFormulaireComponent', () => {
  let component: UpdateFormulaireComponent;
  let fixture: ComponentFixture<UpdateFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
