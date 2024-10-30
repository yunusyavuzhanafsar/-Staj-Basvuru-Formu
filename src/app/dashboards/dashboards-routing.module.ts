import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', loadChildren: () => import('./c1/c1.module').then((m) => m.C1Module)},
          { path: 'home2', loadChildren: () => import('./home2/home2.module').then((m) => m.Home2Module)},
        ])
    ],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
