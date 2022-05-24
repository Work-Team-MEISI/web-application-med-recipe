import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeCollection } from 'src/app/shared/constants/theme.collection';
import { TokenCollection } from 'src/app/shared/constants/token.collection';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {

  /** 
   * Stores theme as an Observable ( Promise );
   * Allows subscriptions returning that value;
   */
  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  constructor(
    private readonly _storageService: LocalStorageService,
  ) {
    const baseTheme = this._initializeBaseTheme();

    this._state = new BehaviorSubject<ThemeCollection>(baseTheme);
    this._state$ = this._state.asObservable();
  }

  /**
   * Unsubscribes from the subject. 
   * Avoids data leaks.
   */
  public ngOnDestroy(): void {
    this._state.unsubscribe();
    this._state.complete();
  }

  /**
   * Gets the base theme from the Storage Service;
   * If the theme is not present on the storage then gets the ( dark-theme );
   * 
   * @returns ( dark-theme / light-theme )
   */
  private _initializeBaseTheme(): ThemeCollection {
    const theme = this._storageService.fetchToken<ThemeCollection>(TokenCollection.THEME);

    if (theme === null) {
      this._storageService.createToken(TokenCollection.THEME, ThemeCollection.DARK_THEME);
    }

    return theme !== null ? theme : ThemeCollection.DARK_THEME;
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  /**
   * Updates to the new selected theme;
   * 
   * @param theme ( dark-theme / light-theme )
   * @returns 
   */
  public updateTheme(theme: ThemeCollection): void {
    this._storageService.createToken(TokenCollection.THEME, theme);
    return this._state.next(theme);
  }

  /**
   * Splits the name of the selected theme;
   * Beautifies the name by returning only the theme name;
   * 
   * @param themeName 
   * @returns 
   */
  public beautifySelectedThemeName(themeName: ThemeCollection): string {
    return themeName.split("-")[0];
  }

}
