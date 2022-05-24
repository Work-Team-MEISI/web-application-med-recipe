import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoute } from './constants/user.route';

const routes: Routes = [
    {
        path: UserRoute.AUTHENTICATION,
        loadChildren: () => import("./routes/authentication/authentication.module").then((m) => m.AuthenticationModule),
    },
    {
        path: UserRoute.PROFILE,
        loadChildren: () => import("./routes/profile/profile.module").then((m) => m.ProfileModule),
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
