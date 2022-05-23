import { Injectable } from '@angular/core';
import { IconModel } from 'src/app/shared/models/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly _icons: Array<IconModel>;

  constructor() {
    this._icons = new Array<IconModel>();
  }
}
