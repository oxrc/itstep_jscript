import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';
import {Injectable} from '@angular/core';

@Component({
  selector: 'my-users_get',
  templateUrl: './users_get.component.html',
  styleUrls: [ './users_get.component.css' ]
})
export class Users_getComponent implements OnInit {

  	public users;
    constructor(http: Http) {
        http.get('http://127.0.0.1/api/get_user/5/0').map((res: Response) => res.json())
		.subscribe(res => this.users = res.users);
    }	

	public dropUser(id) {
		alert('Drop ' + id);
	}

  ngOnInit(): void {
  }
}
