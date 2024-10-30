import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";

import {NavbarComponent} from "./component/navbar/navbar.component";


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register',title:'Başvuru Listesi', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
