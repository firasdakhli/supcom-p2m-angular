import { Component, OnInit } from '@angular/core';
import {FormulaireService} from 'src/app/services/formulaire.service';
import { Formulaire } from 'src/app/models/Formulaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formulaire : Formulaire = new Formulaire();
  submitted = false;

  constructor(private formservice : FormulaireService, private router:Router) { }

  ngOnInit(): void {
  }
  newForm():void{
    this.submitted=false;
    this.formulaire = new Formulaire();
  }
  save(){
    
    this.formservice.createFormulaire(this.formulaire).subscribe(data => console.log(data), error => console.log(error));
    this.formulaire = new Formulaire();
    this.gotoList();
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/'])
  }

}




