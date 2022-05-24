import { Component, Input, OnInit } from '@angular/core';
import { IconService } from 'src/app/core/services/icon/icon.service';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { ThemeCollection } from 'src/app/shared/constants/theme.collection';

@Component({
  selector: 'app-theme-switcher-menu',
  templateUrl: './theme-switcher-menu.component.html',
  styleUrls: ['./theme-switcher-menu.component.scss']
})
export class ThemeSwitcherMenuComponent implements OnInit {
  private readonly _themes: Array<ThemeCollection>;

  constructor(
    private readonly _iconService: IconService,
    private readonly _themeService: ThemeService,
  ) {
    this._themes = new Array<ThemeCollection>(
      ThemeCollection.DARK_THEME,
      ThemeCollection.LIGHT_THEME,
    );
  }

  ngOnInit(): void { }

  public get iconService(): IconService {
    return this._iconService;
  }

  public get themeService(): ThemeService {
    return this._themeService;
  }

  public get themes(): Array<ThemeCollection> {
    return this._themes;
  }
}
