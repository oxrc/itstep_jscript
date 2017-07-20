import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'user_edit',
  templateUrl: './user_edit.component.html',
  styleUrls: [ './user_edit.component.css' ]
})
export class User_editComponent  {


  constructor(
    
    private route: ActivatedRoute,
    private location: Location
  ) {}

 

  goBack(): void {
    this.location.back();
  }
}
