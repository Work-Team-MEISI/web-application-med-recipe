import { Component, OnInit } from '@angular/core';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { AbstractFormComponent } from 'src/app/shared/components/forms/form.abstract';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractFormComponent implements OnInit {

  constructor(
    private readonly _localeService: LocaleService
  ) {
    super([
      { name: "email", default: "", rules: ['required'] },
      { name: "password", default: "", rules: ['required'] },
    ]);
  }

  ngOnInit(): void { }

  public get localeService(): LocaleService {
    return this._localeService;
  }

  public override save(): void { }

}
