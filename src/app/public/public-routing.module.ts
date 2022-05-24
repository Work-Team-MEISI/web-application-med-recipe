import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoute } from '../shared/constants/public.route';

const routes: Routes = [
    {
        path: `${PublicRoute.USERS}`,
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
    },
    {
        path: PublicRoute.BASE,
        redirectTo: `${PublicRoute.USERS}`,
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
