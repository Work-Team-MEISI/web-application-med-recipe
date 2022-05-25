import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRoute } from './constants/patient.route';

const routes: Routes = [
    {
        path: PatientRoute.BASE,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRoutingModule { }
