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
	public interests;
	public http: Http;
	public users_count: number = 2;
	public users_page: number = 0;
	
    constructor(http: Http) {
		http.get('http://127.0.0.1/api/get_interests').map((res: Response) => res.json())
			.subscribe(res => this.interests = res.interests);
		this.http = http;
		this.get_users();
    }
	
	public get_users_count() {
		return 12;
	}
	
	public get_users() {
		this.http.get('http://127.0.0.1/api/get_user/' + this.users_count + '/' + this.users_page).map((res: Response) => res.json())
			.subscribe(res => this.users = res.users);
	}
	
	public dropUser(id) {
		this.http.get('http://127.0.0.1/api/drop_user/'+id).map((res: Response) => res.json()).subscribe();
		this.get_users();
	}

	
  ngOnInit(): void {
  }
}
