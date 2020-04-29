import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JurryComponent } from './jurry/jurry.component';
import { AppComponent } from './app.component';
import { AddJurryComponent } from './jurry/add-jurry/add-jurry.component';
import { UpdateJurryComponent } from './jurry/update-jurry/update-jurry.component';
import { ShowJurryComponent } from './jurry/show-jurry/show-jurry.component';
import { DeleteJurryComponent } from './jurry/delete-jurry/delete-jurry.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ShowFormulaireComponent } from './formulaire/show-formulaire/show-formulaire.component';
import {DetailsFormulaireComponent } from './formulaire/details-formulaire/details-formulaire.component';
import {UpdateFormulaireComponent } from './formulaire/update-formulaire/update-formulaire.component';
import { MarkComponent } from './mark/mark.component';
import { ShowmarkComponent } from './mark/showmark/showmark.component';

const routes: Routes = [
  { path: '', redirectTo: 'formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'show_formulaire', component:  ShowFormulaireComponent },
  { path: 'jurry', component: JurryComponent },
  { path: 'mark', component: MarkComponent },
  { path: 'add_jurry', component:  AddJurryComponent },
  { path: 'update/:idd', component: UpdateJurryComponent },
  { path: 'form-details/:id', component:  DetailsFormulaireComponent },
  { path: 'form-update/:id', component:  UpdateFormulaireComponent },
  { path: 'show-mark/:idd', component: ShowmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
