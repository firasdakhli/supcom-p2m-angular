import { Component, OnInit, Input } from '@angular/core';
import {JurryServiceService} from 'src/app/services/jurry-service.service';
import { Jurry } from 'src/app/models/Jurry';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-jurry',
  templateUrl: './update-jurry.component.html',
  styleUrls: ['./update-jurry.component.css']
})
export class UpdateJurryComponent implements OnInit {

  id: String;
  idd : number;
  jurry: Jurry;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: JurryServiceService) { }

  ngOnInit(): void {
    this.jurry = new Jurry();

    this.id = this.route.snapshot.params['idd'];
    
    this.employeeService.getJurry(this.id)
      .subscribe(data => {
        console.log(data)
        this.jurry = data;
      }, error => console.log(error));
  }
  updateJurry() {
    this.employeeService.updateJurry(this.id, this.jurry)
      .subscribe(data => console.log(data), error => console.log(error));
    this.jurry = new Jurry();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.updateJurry();    
  }

  gotoList() {
    this.router.navigate(['/jurry']);
  }

}
