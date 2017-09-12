import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, Response, HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { Users_getComponent }   from './users_get.component';
import { User_editComponent }  from './user_edit.component';
import { Interes_addComponent }  from './interes_add.component';
import { User_addComponent }  from './user_add.component';
import { SearchFilter }  from './SearchFilter';


import { AppRoutingModule }     from './app-routing.module';
import 'rxjs/Rx';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
	HttpModule
  ],
  declarations: [
    AppComponent,
    Users_getComponent,
    User_editComponent,
	  Interes_addComponent,
    User_addComponent,
    SearchFilter
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
