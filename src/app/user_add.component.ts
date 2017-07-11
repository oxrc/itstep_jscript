import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

    items = [{
        id: '5',
        Year: '2010'
    }, {
        id: '6',
        Year: '2010'
    }, {
        id: '7',
        Year: '2013'
    }];
    
    selected = {
        id: '5'
    };
  ngOnInit(): void {
  }
}
