import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationRoute } from './constants/authentication.route';

const routes: Routes = [
    {
        path: AuthenticationRoute.SIGN_IN,
        component: SignInComponent,
    },
    {
        path: AuthenticationRoute.SIGN_UP,
        component: SignUpComponent
    },
    {
        path: AuthenticationRoute.FORGOT_PASSWORD,
        component: ForgotPasswordComponent,
    },
    {
        path: AuthenticationRoute.BASE,
        redirectTo: AuthenticationRoute.SIGN_IN,
        pathMatch: "full"
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
