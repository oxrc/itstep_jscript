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
    http:Http;
    public user = {
        name: "Josh",
        age: 34,
        phone: 783459,
        interests: 2
    };
    constructor(http: Http) {
       http.get('http://127.0.0.1/api/interests').map((res: Response) => res.json())
			.subscribe(res => {this.interests = res;});	
    
      this.http = http;
 }

        Add() {
           console.log(this.user); 
           this.http.post('http://localhost/api/user/add', this.user).subscribe(res => {
                console.log("Added user");
            });	
        }
    
    ngOnInit(): void {
      }
}
    
