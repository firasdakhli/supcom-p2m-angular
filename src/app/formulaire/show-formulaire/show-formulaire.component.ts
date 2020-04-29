import { Component, OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import{ Formulaire } from "src/app/models/Formulaire";
import {FormulaireService} from 'src/app/services/formulaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-formulaire',
  templateUrl: './show-formulaire.component.html',
  styleUrls: ['./show-formulaire.component.css']
})
export class ShowFormulaireComponent implements OnInit {

  constructor(private formservice : FormulaireService, private router:Router) { }
  displayColumns : string[] = ['options','identity', 'name', 'adresse'];
  formulaire : Observable<Formulaire[]>;

  ngOnInit(): void {
    this.reloadData();
  }
  deleteEmployee(id: String) {
    this.formservice.deleteFormulaire(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
       //console.log(id)
  }
  reloadData() {
    this.formulaire = this.formservice.getFormulaireList();
    
      }   
      employeeDetails(idd: String){
       // var id = Number(idd);
        this.router.navigate(['form-details', idd]);
        console.log(idd); } 
        
        updateEmployee(id: String){
          var idd = Number(id); // il faut concertir la valeur en entier car la navigation ne nmarche qua avec id number
          console.log(idd);
          this.router.navigate(['form-update',id]);
        
        }  

}
  

  

  
   

  

