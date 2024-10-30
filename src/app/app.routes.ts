import { Routes } from '@angular/router';
import { C1Component } from './dashboards/c1/c1.component';
import { LoginComponent } from './component/login/login.component';
import {Home2Component} from "./dashboards/home2/home2.component";
import {NavbarComponent} from "./component/navbar/navbar.component";

export const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: C1Component },
  { path: 'home2', component: Home2Component },
  { path: 'navbar', component: NavbarComponent }
];
