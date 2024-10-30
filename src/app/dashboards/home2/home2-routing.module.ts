import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'home2', loadChildren: () => import('./home2.module').then((m) => m.Home2Module)},
        ])
    ],
    exports: [RouterModule]
})
export class Home2RoutingModule {}
