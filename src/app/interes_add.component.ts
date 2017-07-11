import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'interes_add',
  templateUrl: './interes_add.component.html',
  styleUrls: [ './interes_add.component.css' ]
})
export class Interes_addComponent implements OnInit {
  area_title:string="Добавление интересов:";
  interes:string="";
  myColor:string="red";
  input_color_string:string="Покрасить в:";
  input_interes_string:string="Твой интерес:";
  button_add_interes_text:string="Add interes!";
  ngOnInit(): void {
	
  }
}
