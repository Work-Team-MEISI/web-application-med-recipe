import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangCollection } from 'src/app/shared/constants/lang.collection';
import { TokenCollection } from 'src/app/shared/constants/token.collection';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(
    private readonly _storageService: LocalStorageService,
    private readonly _translateService: TranslateService,
  ) { }

  public initializeLanguage(): void {
    const storedLang = this._storageService.fetchToken<LangCollection>(TokenCollection.LANG);
    const langToUse = storedLang !== null ? storedLang : navigator.language.split("-")[0].toLocaleLowerCase() as LangCollection;

    this.updateLanguage(langToUse);
  }

  public updateLanguage(langToUse: LangCollection): void {
    this._translateService.use(langToUse).subscribe(() => {
      this._storageService.createToken(TokenCollection.LANG, langToUse);

      this._translateService.reloadLang(langToUse);
    })
  }

  public static httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
  }
}
