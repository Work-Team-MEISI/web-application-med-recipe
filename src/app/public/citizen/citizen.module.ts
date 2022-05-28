import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizenComponent } from './components/citizen.component';
import { ProfileModule } from './routes/profile/profile.module';
import { CitizenRoutingModule } from './citizen-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CitizenComponent
  ],
  imports: [
    CommonModule,
    CitizenRoutingModule,
    ProfileModule,
    SharedModule
  ]
})
export class CitizenModule { }
