import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/core/services/icon/icon.service';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { ThemeCollection } from 'src/app/shared/constants/theme.collection';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly _localeService: LocaleService,
    private readonly _iconService: IconService,
    private readonly _themeService: ThemeService,
  ) { }

  ngOnInit(): void { }

  public get localeService(): LocaleService {
    return this._localeService;
  }

  public get iconService(): IconService {
    return this._iconService;
  }

  public updateTheme(): void {
    this._themeService.updateTheme(ThemeCollection.DARK_THEME);
  }

}
