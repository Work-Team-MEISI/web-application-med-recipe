import { Component, OnInit } from '@angular/core';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { AbstractFormComponent } from 'src/app/shared/components/forms/form.abstract';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends AbstractFormComponent implements OnInit {

  constructor(
    private readonly _localeService: LocaleService
  ) {
    super([
      { name: "email", default: "", rules: ['required'] },
    ]);
  }

  ngOnInit(): void { }

  public get localeService(): LocaleService {
    return this._localeService;
  }

  public override save(): void { }

}
