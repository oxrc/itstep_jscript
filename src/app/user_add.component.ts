import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';
import {Injectable} from '@angular/core';
//import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'user_add',
  templateUrl: './user_add.component.html',
  styleUrls: [ './user_add.component.css' ]
})
export class User_addComponent implements OnInit {

	public interests;
    public users;
    constructor(http: Http) {
        http.get('http://localhost/api/interests').map((res: Response) => res.json())
		.subscribe(res => {

         this.interests = res;

          console.log(this.interests);
    });	
     http.get('http://localhost/api/users').map((res: Response) => res.json())
		.subscribe(res => {

         this.users = res;

          console.log(this.users);
    });	
      
 }
    
    ngOnInit(): void {
      }
}
    
