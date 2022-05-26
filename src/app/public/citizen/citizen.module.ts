import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizenComponent } from './components/citizen.component';
import { ProfileModule } from './routes/profile/profile.module';

@NgModule({
  declarations: [
    CitizenComponent
  ],
  imports: [
    CommonModule,
    ProfileModule
  ]
})
export class CitizenModule { }
