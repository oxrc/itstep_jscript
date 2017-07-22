import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, HttpModule } from '@angular/http';


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
  interes: string = "";
     headers = new Headers({'Content-Type': 'application/json'});
   
    
  constructor(http: Http){
      http.get('http://localhost/api/interests').map((res: Response) => res.json())
		.subscribe(res => {

          console.log(res);
    });	
      this.http = http;
  };    
    
  public add_interes(){
     this.http.post('http://localhost/api/interests/add', JSON.stringify(this.interes), this.headers).map((res: Response) => res.json());
  };    
    
    
  ngOnInit(): void {
	
  }
}
