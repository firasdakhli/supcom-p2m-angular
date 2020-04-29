import { Component, OnInit } from '@angular/core';
import {JurryServiceService} from 'src/app/services/jurry-service.service';
import { Jurry } from 'src/app/models/Jurry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jurry',
  templateUrl: './add-jurry.component.html',
  styleUrls: ['./add-jurry.component.css']
})
export class AddJurryComponent implements OnInit {

  jurry: Jurry = new Jurry();
  submitted = false;
  constructor(private jurryServiceService : JurryServiceService, private router:Router ) { }//we create a 

  ngOnInit(): void {
  }
  newJurry():void{
    this.submitted=false;
    this.jurry = new Jurry();
  }
  save(){
    this.jurryServiceService.createJurry(this.jurry).subscribe(data => console.log(data), error => console.log(error));
    this.jurry = new Jurry();
    this.gotoList();
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/jurry'])
  }

}
