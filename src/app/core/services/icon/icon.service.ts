import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconCollection } from 'src/app/shared/constants/icon.collection';
import { IconModel } from 'src/app/shared/models/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly _icons: Array<IconModel>;

  constructor() {
    this._icons = new Array<IconModel>(
      {
        name: IconCollection.THEME,
        definition: faLightbulb
      },
      {
        name: IconCollection.LANGUAGE,
        definition: faGlobe
      },
      {
        name: IconCollection.USER,
        definition: faUser
      },
    );
  }

  /** Utility */

  private _fetchIconDefinition(iconName: string): IconDefinition {
    return this._icons.find((icon) => icon.name.match(iconName))!.definition;
  }

  /** Getters */

  public get themeIcon(): IconDefinition {
    return this._fetchIconDefinition(IconCollection.THEME);
  }

  public get languageIcon(): IconDefinition {
    return this._fetchIconDefinition(IconCollection.LANGUAGE);
  }

  public get userIcon(): IconDefinition {
    return this._fetchIconDefinition(IconCollection.USER);
  }
}
