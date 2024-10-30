import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardsRoutingModule} from './dashboards-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [CommonModule, DashboardsRoutingModule,HttpClientModule],
    declarations: [
  ]
})
export class DashboardsModule {
}
