import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Module } from './dashboards/c1/c1.module';

import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    C1Module,
    LoginComponent,
  ],

  standalone: true
})
export class AppComponent {


}
