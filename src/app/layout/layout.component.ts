import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme/theme.service';
import { ThemeCollection } from '../shared/constants/theme.collection';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    private readonly _themeService: ThemeService,
  ) { }

  /** Getters */

  public get theme$(): Observable<ThemeCollection> {
    return this._themeService.state$;
  }

}
