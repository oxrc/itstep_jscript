import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Http, Response, HttpModule } from '@angular/http';


@Component({
  selector: 'user_edit',
  templateUrl: './user_edit.component.html',
  styleUrls: [ './user_edit.component.css' ]
})
export class User_editComponent  {
 
    id:Number;
    sub:any;
    public user_edit = {};
  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private location: Location
  ) {
      this.sub = this.route.params.subscribe(params => {
          this.id = params['id'];
      });
        
      this.http.get('http://localhost/api/user/edit?id=' + this.id).map((res: Response) => res.json())
      .subscribe(res => {this.user_edit = res;}); 

      
      
  }

  


   ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
