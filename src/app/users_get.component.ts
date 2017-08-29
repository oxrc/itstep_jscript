import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-users_get',
  templateUrl: './users_get.component.html',
  styleUrls: [ './users_get.component.css' ]
})
export class Users_getComponent implements OnInit {


  	public users;
    public users_list;
	public interests;
	public http: Http;
	public users_count: number = 5;
	public users_page: number = 1;
	public all_users_count: number;
	public pages = [];
	
    constructor(
		private route: ActivatedRoute,
        private router: Router,
		http: Http
		) 
    {
		http.get('http://127.0.0.1/api/interests').map((res: Response) => res.json())
			.subscribe(res => {this.interests = res;});
		this.http = http;
		this.users_page = Number(this.route.snapshot.params['id']);
		this.get_users();
        
        http.get('http://127.0.0.1/api/users').map((res: Response) => res.json())
			.subscribe(res => {this.users_list = res;});
    }
	
	public get_users_count() {
		this.all_users_count = 0;
		this.http.get('http://127.0.0.1/api/users/count').map((res: Response) => res.json())
			.subscribe(res => {this.all_users_count = res.usersCount;});
		return this.all_users_count; //todo: get users_count from ajax
	}
	
	public get_users(users_page = this.users_page) {
		if (this.users_page < 1) {
			users_page = 1;
			this.update_listing();
		}
		this.users_page = users_page;
		this.http.get('http://127.0.0.1/api/users/?page=' + this.users_page).map((res: Response) => res.json())
			.subscribe(res => this.users_list = res);
		this.update_listing();
	}
	
	public update_listing() {
		let users_count = this.get_users_count();
		let pages_count = Math.ceil(users_count / this.users_count);
		this.pages = [];
		for (var i=1; i < pages_count; i++) {
			this.pages.push({ id: i });
		}
	}
	
	public dropUser(id) {
		this.http.get('http://127.0.0.1/api/drop_user/'+id).map((res: Response) => res.json()).subscribe();
		this.get_users();
	}

	
  ngOnInit(): void {
	  
  }
}
