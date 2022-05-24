import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSwitcherMenuComponent } from './components/menus/theme-switcher-menu/theme-switcher-menu.component';
import { LanguageSwitcherMenuComponent } from './components/menus/language-switcher-menu/language-switcher-menu.component';
import { MaxScreenLoaderAnimationComponent } from './components/animations/max-screen-loader-animation/max-screen-loader-animation.component';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThemeSwitcherMenuComponent,
    LanguageSwitcherMenuComponent,
    MaxScreenLoaderAnimationComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  exports: [
    TranslateModule,
    ThemeSwitcherMenuComponent,
    LanguageSwitcherMenuComponent,
    CoreModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
