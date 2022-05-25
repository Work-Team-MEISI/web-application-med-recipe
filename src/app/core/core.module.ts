import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/storage/local-storage/local-storage.service';
import { SessionStorageService } from './services/storage/session-storage/session-storage.service';
import { CookieStorageService } from './services/storage/cookie-storage/cookie-storage.service';
import { LocaleService } from './services/locale/locale.service';
import { LocalizationService } from './services/localization/localization.service';
import { ThemeService } from './services/theme/theme.service';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    HttpService,
    LocalStorageService,
    SessionStorageService,
    CookieStorageService,
    LocaleService,
    LocalizationService,
    ThemeService,
  ],
  exports: [
    AngularMaterialModule,
  ]
})
export class CoreModule { }
