import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Http, Response, HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { Users_getComponent }   from './users_get.component';
import { User_editComponent }  from './user_edit.component';
import { Interes_addComponent }  from './interes_add.component';
import { User_addComponent }  from './user_add.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';
import 'rxjs/Rx';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	HttpModule
  ],
  declarations: [
    AppComponent,
    Users_getComponent,
    User_editComponent,
	Interes_addComponent,
	User_addComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
