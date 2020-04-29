import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormulaireComponent } from './details-formulaire.component';

describe('DetailsFormulaireComponent', () => {
  let component: DetailsFormulaireComponent;
  let fixture: ComponentFixture<DetailsFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
