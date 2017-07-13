import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'interes_add',
  templateUrl: './interes_add.component.html',
  styleUrls: [ './interes_add.component.css' ]
})
export class Interes_addComponent implements OnInit {
  area_title:string="Add Interests:";
  interes:string="";
  myColor:string="black";
  input_color_string:string="Repaint text:";
  input_interes_string:string="Your Interest:";
  button_add_interes_text:string="Add!";
  ngOnInit(): void {
	
  }
}
