import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Users_getComponent }   from './users_get.component';
import { HeroesComponent }      from './heroes.component';
import { User_editComponent }  from './user_edit.component';
import { Interes_addComponent }  from './interes_add.component';

const routes: Routes = [
  { path: '', redirectTo: '/users_get/0', pathMatch: 'full' },
  { path: 'users_get/:id',  component: Users_getComponent },
  { path: 'user_edit/:id', component: User_editComponent },
  { path: 'interes_add',     component: Interes_addComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
