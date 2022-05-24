import { Component, OnInit } from '@angular/core';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { AbstractFormComponent } from 'src/app/shared/components/forms/form.abstract';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractFormComponent implements OnInit {

  constructor(
    private readonly _localeService: LocaleService
  ) {
    super([
      { name: "username", default: "", rules: ['required'] },
      { name: "email", default: "", rules: ['required'] },
      { name: "firstName", default: "", rules: ['required'] },
      { name: "lastName", default: "", rules: ['required'] },
      { name: "password", default: "", rules: ['required'] },
    ]);
  }

  ngOnInit(): void { }

  public get localeService(): LocaleService {
    return this._localeService;
  }

  public override save(): void { }

}