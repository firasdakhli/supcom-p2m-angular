import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormulaireComponent } from './show-formulaire.component';

describe('ShowFormulaireComponent', () => {
  let component: ShowFormulaireComponent;
  let fixture: ComponentFixture<ShowFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
