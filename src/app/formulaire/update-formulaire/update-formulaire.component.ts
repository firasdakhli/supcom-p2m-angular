import { Component, OnInit } from '@angular/core';
import {FormulaireService} from 'src/app/services/formulaire.service';
import { Formulaire } from 'src/app/models/Formulaire';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-formulaire',
  templateUrl: './update-formulaire.component.html',
  styleUrls: ['./update-formulaire.component.css']
})
export class UpdateFormulaireComponent implements OnInit {
  id: String;
  idd : number;
  formulaire: Formulaire;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private formService: FormulaireService) { }

  ngOnInit(): void {
    this.formulaire = new Formulaire()
    this.id = this.route.snapshot.params['id'];
    
    this.formService.getFormulaire(this.id)
      .subscribe(data => {
        console.log(data)
        this.formulaire = data;
      }, error => console.log(error));
  }
  updateFormulaire() {
    this.formService.updateFormulaire(this.id, this.formulaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formulaire = new Formulaire();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.updateFormulaire();    
  }
  gotoList() {
    this.router.navigate(['/show_formulaire']);
  }



}


  
  