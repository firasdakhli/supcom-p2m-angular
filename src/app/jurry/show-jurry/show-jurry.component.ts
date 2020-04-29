import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import{ Jurry } from "src/app/models/Jurry";
import {JurryServiceService} from 'src/app/services/jurry-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-jurry',
  templateUrl: './show-jurry.component.html',
  styleUrls: ['./show-jurry.component.css']
})
export class ShowJurryComponent implements OnInit {

  constructor(private jurryServiceService : JurryServiceService, private router:Router) { }
 // employees : MatTableDataSource<any>;
  displayColumns : string[] = ['options','identity', 'name', 'adresse'];
  jurry : Observable<Jurry[]>;
 // j: Observable<Jurry[]>;
  ngOnInit(): void {
    this.reloadData();
  }
  deleteEmployee(id: String) {
    this.jurryServiceService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
       //console.log(id)
  }

  reloadData() {
   this.jurry = this.jurryServiceService.getJurrysList();
   
     }      
   

/* employeeDetails(id: String){
   this.router.navigate(['details', id]);
   console.log(id);
  }*/

  updateEmployee(id: String){
    var idd = Number(id); // il faut concertir la valeur en entier car la navigation ne nmarche qua avec id number
    console.log(idd);
    this.router.navigate(['update',id]);
  
  }
 //console.log(id);*/
  
}
