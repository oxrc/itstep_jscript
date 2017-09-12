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
    public name:String = "";
    public age:Number;
    public phone:Number; 
    public interes = []; 
   
    http:Http;
  
    
    constructor(http: Http) {
       http.get('http://127.0.0.1/api/interests').map((res: Response) => res.json())
			.subscribe(res => {this.interests = res;});	
    
      this.http = http;
    
     }
    
     Add() {
           for(var i=0; i< this.interes.length; i++){
                this.interes[i] = parseInt(this.interes[i], 10);
           }
          
           
           this.http.get('http://127.0.0.1/api/user/add?name='+this.name+'&age='+this.age+'&phone='+this.phone+'&interests='+this.interes ).subscribe(res => {
                console.log("Added user");
            });	
     }
    
    ngOnInit(): void {
      }
}
    
