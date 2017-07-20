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
    constructor(http: Http) {
        http.get('http://127.0.0.1/api/get_interests').map((res: Response) => res.json())
		.subscribe(res => this.interests = res.interests);
    }	

  ngOnInit(): void {
  }
}
