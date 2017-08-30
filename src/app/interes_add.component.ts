import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions, Http, Response, HttpModule } from '@angular/http';


@Component({
  selector: 'interes_add',
  templateUrl: './interes_add.component.html',
  styleUrls: [ './interes_add.component.css' ]
})
export class Interes_addComponent implements OnInit {
  area_title:string="Add Interes:";
  myColor:string="black";
  input_color_string:string="Repaint color:";
  input_interes_string:string="Your Interest:";
  button_add_interes_text:string="Add!";
    
     http: Http;    
     interest = {
        interest: ""
     };
     headers = new Headers({ 'Content-Type': 'text/plain' });
     options = new RequestOptions({ headers: this.headers });
    
  constructor(http: Http){
      this.http = http;
  };    
    
  public add_interes(){
     this.http.get('http://localhost/api/interests/add/?interest=' + this.interest['interest'])
               .subscribe(res => {
                    console.log("Added interes");
                });
     console.log(this.interest);
  };    
    
    
  ngOnInit(): void {
	
  }
}
