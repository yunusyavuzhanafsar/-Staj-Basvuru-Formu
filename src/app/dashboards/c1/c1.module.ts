import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {C1Component} from "./c1.component";
import {C1RoutingModule} from "./c1-routing.module";
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from "primeng/table";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";


@NgModule({
  imports: [
    CommonModule,
    C1RoutingModule,
    DropdownModule,
    TableModule,
    DividerModule,
    CardModule
  ],
  declarations: [C1Component],
  exports: [
    C1Component
  ],

  providers: []
})
export class C1Module {}
