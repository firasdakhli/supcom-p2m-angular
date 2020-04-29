import { Component, OnInit } from '@angular/core';
import { Mark } from 'src/app/models/Mark';
import {MarkService} from 'src/app/services/mark.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showmark',
  templateUrl: './showmark.component.html',
  styleUrls: ['./showmark.component.css']
})
export class ShowmarkComponent implements OnInit {
  id: string;
  form: Mark;

  constructor(private route: ActivatedRoute,private router: Router,
    private formService: MarkService) { }

  ngOnInit(): void {
    this.form = new Mark();

    this.id = this.route.snapshot.params['idd'];
    
    this.formService.getMark(this.id)
      .subscribe(data => {
        console.log(data)
        this.form = data;
      }, error => console.log(error));
  }
  /*list(){
    this.router.navigate(['form-update',this.id]);
  }*/

}




  

  

  