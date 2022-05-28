import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoute } from '../shared/constants/public.route';
import { AuthenticatedGuard } from './user/routes/authentication/guard/authenticated.guard';
import { AuthenticationGuard } from './user/routes/authentication/guard/authentication.guard';

const routes: Routes = [
    {
        path: `${PublicRoute.CITIZENS}`,
        loadChildren: () => import("./citizen/citizen.module").then((m) => m.CitizenModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: `${PublicRoute.USERS}`,
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
        canActivate: [AuthenticatedGuard]
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
