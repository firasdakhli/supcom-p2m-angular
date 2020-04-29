import { Component, OnInit } from '@angular/core';
import { Formulaire } from 'src/app/models/Formulaire';
import {FormulaireService} from 'src/app/services/formulaire.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { ShowFormulaireComponent } from 'src/app/formulaire/details-formulaire/details-formulaire.component';

@Component({
  selector: 'app-details-formulaire',
  templateUrl: './details-formulaire.component.html',
  styleUrls: ['./details-formulaire.component.css']
})
export class DetailsFormulaireComponent implements OnInit {
  id: string;
  form: Formulaire;

  constructor(private route: ActivatedRoute,private router: Router,
    private formService: FormulaireService) { }

  ngOnInit(): void {
    this.form = new Formulaire();

    this.id = this.route.snapshot.params['id'];
    
    this.formService.getFormulaire(this.id)
      .subscribe(data => {
        console.log(data)
        this.form = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['form-update',this.id]);
  }

}









  

  

 