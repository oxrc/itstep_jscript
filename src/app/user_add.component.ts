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
/*	<?php
		foreach ($interests as $key => $value)
			echo "<option value='{$interests[$key]['id']}'>{$interests[$key]['interes']}</option>";
	?>*/

	public interests;
    constructor(http: Http) {
        http.get('http://127.0.0.1/api/get_interests').map((res: Response) => res.json())
		.subscribe(res => this.interests = res.interests);
    }	
	
//    public interests = [
//		{ interes: 'Something', id: 21 },
//		{ interes: 'Another something', id: 24 },
//		{ interes: 'The anotherest something', id: 18 }
//    ];
  ngOnInit(): void {
  }
}
