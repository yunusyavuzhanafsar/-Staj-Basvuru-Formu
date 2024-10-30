import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'navbar', loadChildren: () => import('./navbar.module').then((m) => m.NavbarModule)},
    ])
  ],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
