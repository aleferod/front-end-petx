import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import {CreateAccountComponent} from '../app/create-account/create-account.component'
import {HomeComponent} from '../app/home/home.component'
import {ResultSearchComponent} from '../app/result-search/result-search.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'search' , component: ResultSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
