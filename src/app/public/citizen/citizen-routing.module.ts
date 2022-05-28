import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenComponent } from './components/citizen.component';
import { CitizenRoute } from './constants/citizen.route';

const routes: Routes = [
    {
        path: CitizenRoute.BASE,
        component: CitizenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CitizenRoutingModule { }
