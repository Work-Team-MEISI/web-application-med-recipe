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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    LocalStorageService,
    SessionStorageService,
    CookieStorageService,
    LocaleService,
    LocalizationService,
    ThemeService
  ]
})
export class CoreModule { }
