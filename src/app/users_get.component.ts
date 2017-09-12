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
	public pages_count: number;
	public pages = [];
<<<<<<< HEAD
	public promisedData: Promise<any>;
	
=======


	//search: variables
	public search_name = '';
	public search_age:Number;
	public search_phone:Number;
	public search_interests:Number[];
	public search_result = {};




>>>>>>> origin/angular
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
		//this.promisedData = new Promise(resolve => {
			this.http.get('http://127.0.0.1/api/users/count').map((res: Response) => res.json())
				.subscribe(res => {this.all_users_count = res.usersCount; this.update_listing();});
		//});
		//return this.all_users_count; //todo: get users_count from ajax
		//return;
	}
	
	public get_users(users_page = this.users_page) {
		if (this.pages_count < users_page)
			return;
		if (this.users_page < 1) {
			users_page = 1;
			this.get_users_count();
			//.then(this.update_listing(), function (Error) {console.log('problem')});
		}
		this.users_page = users_page;
		this.http.get('http://127.0.0.1/api/users/?page=' + this.users_page).map((res: Response) => res.json())
			.subscribe(res => this.users_list = res);
		this.get_users_count();
		//.then(this.update_listing(),  function (Error) {console.log('problem')});
	}
	
	public update_listing() {
		this.pages_count = Math.ceil(this.all_users_count / this.users_count);
		this.pages = [];
		for (var i=1; i <= this.pages_count; i++) {
			this.pages.push({ id: i });
		}
	}
	
	public dropUser(id:Number) {
		this.http.get('http://127.0.0.1/api/user/delete/?id=' + id).subscribe(res => {
                console.log("Remove user");
						});
						
							
		this.get_users();
	}

	 public Search() {
		    var URL = "http://localhost/api/user/search?q";
				if(this.search_name != ''){
					   URL += "&name=" + this.search_name;
				}
				 if(this.search_age != null){
						URL += "&age=" + this.search_age;
				}
				else if(this.search_phone != null){
					URL += "&phone=" + this.search_phone;
				}	
				else if (this.search_interests != null){
					URL += "&interests=" + this.search_interests;
				}
				this.http.get(URL).map((res: Response) => res.json())
					 .subscribe(res => {this.search_result = res;});
					  
						
	 }
	
  ngOnInit(): void {
	  
  }
}
