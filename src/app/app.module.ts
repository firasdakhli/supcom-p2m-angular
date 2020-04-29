import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JurryComponent } from './jurry/jurry.component';
import { AddJurryComponent } from './jurry/add-jurry/add-jurry.component';
import { UpdateJurryComponent } from './jurry/update-jurry/update-jurry.component';
import { ShowJurryComponent } from './jurry/show-jurry/show-jurry.component';
import { DeleteJurryComponent } from './jurry/delete-jurry/delete-jurry.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {JurryServiceService} from 'src/app/services/jurry-service.service';
import {MarkService} from 'src/app/services/mark.service';
import {FormulaireService} from 'src/app/services/formulaire.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ShowFormulaireComponent } from './formulaire/show-formulaire/show-formulaire.component';
import { DetailsFormulaireComponent } from './formulaire/details-formulaire/details-formulaire.component';
import { UpdateFormulaireComponent } from './formulaire/update-formulaire/update-formulaire.component';
import { MarkComponent } from './mark/mark.component';
import { ShowmarkComponent } from './mark/showmark/showmark.component';
//import { InMemoryDataService }  from './in-memory-data.service';
//import{ Jurry } from 'src/app/models/jurry-models'

@NgModule({
  declarations: [
    AppComponent,
    JurryComponent,
    AddJurryComponent,
    UpdateJurryComponent,
    ShowJurryComponent,
    DeleteJurryComponent,//Jurry,
    FormulaireComponent, ShowFormulaireComponent, DetailsFormulaireComponent, UpdateFormulaireComponent, MarkComponent, ShowmarkComponent
  ],
  imports: [

    AppRoutingModule,CommonModule,
    //InMemoryDataService,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatTableModule,MatIconModule,MatButtonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
  ],
  providers: [JurryServiceService,FormulaireService,MarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
