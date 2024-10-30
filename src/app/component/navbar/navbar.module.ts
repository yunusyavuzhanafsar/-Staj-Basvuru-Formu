import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ToolbarModule,
    ButtonModule,
  ]
})
export class NavbarModule { }
