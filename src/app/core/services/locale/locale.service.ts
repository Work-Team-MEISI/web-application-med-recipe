import { Injectable } from '@angular/core';
import { LocaleCollection } from 'src/app/shared/constants/locale.collection';
import { LocaleModel } from 'src/app/shared/models/locale.model';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private readonly _locales: Array<LocaleModel>;

  constructor() {
    this._locales = new Array<LocaleModel>(
      { name: LocaleCollection.BRAND, path: "BRAND" },
    );
  }

  /** Utility */

  private _fetchLocalePath(localeName: string): string {
    return this._locales.find((locale) => locale.name)!.path;
  }

  /** Getters */

  public get brandLocale(): string {
    return this._fetchLocalePath(LocaleCollection.BRAND);
  }
}
