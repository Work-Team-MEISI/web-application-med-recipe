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
      { name: LocaleCollection.BUTTON, path: "BUTTON" },
      /** SignIn Form */
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_IN_FORM_FORM_CONTROL_EMAIL_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_IN_FORM.FORM_CONTROL.EMAIL.LABEL" },
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_IN_FORM_FORM_CONTROL_PASSWORD_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_IN_FORM.FORM_CONTROL.PASSWORD.LABEL" },
      /** SignUp Form */
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_USERNAME_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_UP_FORM.FORM_CONTROL.USERNAME.LABEL" },
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_EMAIL_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_UP_FORM.FORM_CONTROL.EMAIL.LABEL" },
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_FIRST_NAME_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_UP_FORM.FORM_CONTROL.FIRST_NAME.LABEL" },
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_LAST_NAME_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_UP_FORM.FORM_CONTROL.LAST_NAME.LABEL" },
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_PASSWORD_LABEL, path: "CONTENT.USERS.AUTHENTICATION.SIGN_UP_FORM.FORM_CONTROL.PASSWORD.LABEL" },
      /** ForgotPassword Form */
      { name: LocaleCollection.CONTENT_USERS_AUTHENTICATION_FORGOT_PASSWORD_FORM_FORM_CONTROL_EMAIL_LABEL, path: "CONTENT.USERS.AUTHENTICATION.FORGOT_PASSWORD_FORM.FORM_CONTROL.EMAIL.LABEL" },
    );
  }

  /** Utility */

  private _fetchLocalePath(localeName: LocaleCollection): string {
    return this._locales.find((locale) => locale.name.match(localeName))!.path;
  }

  /** Getters */

  public get brandLocale(): string {
    return this._fetchLocalePath(LocaleCollection.BRAND);
  }

  public get buttonLocale(): string {
    return this._fetchLocalePath(LocaleCollection.BUTTON);
  }

  /** SignIn Form */

  public get signInFormEmailLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_IN_FORM_FORM_CONTROL_EMAIL_LABEL);
  }

  public get signInFormPasswordLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_IN_FORM_FORM_CONTROL_PASSWORD_LABEL);
  }

  /** SignUp Form */

  public get signUpFormEmailLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_EMAIL_LABEL);
  }

  public get signUpFormUsernameLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_USERNAME_LABEL);
  }

  public get signUpFormFirstNameLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_FIRST_NAME_LABEL);
  }

  public get signUpFormLastNameLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_FIRST_NAME_LABEL);
  }

  public get signUpFormPasswordLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_SIGN_UP_FORM_FORM_CONTROL_PASSWORD_LABEL);
  }

  /** Forgot Password */

  public get forgotPasswordFormEmailLabelLocale(): string {
    return this._fetchLocalePath(LocaleCollection.CONTENT_USERS_AUTHENTICATION_FORGOT_PASSWORD_FORM_FORM_CONTROL_EMAIL_LABEL);
  }
}
