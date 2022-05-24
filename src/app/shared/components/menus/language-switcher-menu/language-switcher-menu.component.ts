import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/core/services/icon/icon.service';
import { LocalizationService } from 'src/app/core/services/localization/localization.service';
import { LangCollection } from 'src/app/shared/constants/lang.collection';

@Component({
  selector: 'app-language-switcher-menu',
  templateUrl: './language-switcher-menu.component.html',
  styleUrls: ['./language-switcher-menu.component.scss']
})
export class LanguageSwitcherMenuComponent implements OnInit {
  private readonly _languages: Array<LangCollection>;

  constructor(
    private readonly _iconService: IconService,
    private readonly _localizationService: LocalizationService,
  ) {
    this._languages = new Array<LangCollection>(
      LangCollection.EN,
      LangCollection.PT,
      LangCollection.ES,
    );
  }

  ngOnInit(): void { }

  public get iconService(): IconService {
    return this._iconService;
  }

  public get localizationService(): LocalizationService {
    return this._localizationService;
  }

  public get languages(): Array<LangCollection> {
    return this._languages;
  }
}
