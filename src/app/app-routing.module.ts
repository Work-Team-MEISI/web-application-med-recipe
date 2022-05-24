import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoute } from './shared/constants/public.route';

const routes: Routes = [
  {
    path: `${PublicRoute.PUBLIC}`,
    loadChildren: () => import("./public/public.module").then((m) => m.PublicModule),
  },
  {
    path: PublicRoute.WILDCARD,
    redirectTo: `${PublicRoute.PUBLIC}/${PublicRoute.USERS}`,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
