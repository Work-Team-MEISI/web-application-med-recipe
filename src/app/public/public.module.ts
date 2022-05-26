import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
