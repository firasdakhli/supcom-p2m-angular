import { Component, OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import{ Mark } from "src/app/models/Mark";
import {MarkService} from 'src/app/services/mark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  constructor(private formservice : MarkService, private router:Router) { }
   
  formulaire : Observable<Mark[]>;

  ngOnInit(): void {
    this.reloadData();
  }
  deleteEmployee(id: String) {
    this.formservice.deleteMark(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
       //console.log(id)
  }
  reloadData() {
    this.formulaire = this.formservice.getMarkList();
    
      }   
      employeeDetails(idd: String){
       // var id = Number(idd);
        this.router.navigate(['show-mark', idd]);
        console.log(idd); } 
        
        

}





  

