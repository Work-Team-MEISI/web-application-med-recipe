import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconModel } from 'src/app/shared/models/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly _icons: Array<IconModel>;

  constructor() {
    this._icons = new Array<IconModel>();
  }

  /** Utility */

  private _fetchIconDefinition(iconName: string): IconDefinition {
    return this._icons.find((icon) => icon.name.match(iconName))!.definition;
  }

  /** Getters */
}
