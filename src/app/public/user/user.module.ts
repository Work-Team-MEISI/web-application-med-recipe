import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AuthenticationModule } from './routes/authentication/authentication.module';
import { ProfileModule } from './routes/profile/profile.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    AuthenticationModule,
    ProfileModule
  ]
})
export class UserModule { }
