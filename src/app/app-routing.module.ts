import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Users_getComponent }   from './users_get.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/users_get/0', pathMatch: 'full' },
  { path: 'users_get/:id',  component: Users_getComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
