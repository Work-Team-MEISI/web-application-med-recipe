import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { AbstractFormComponent } from 'src/app/shared/components/forms/form.abstract';
import { PublicRoute } from 'src/app/shared/constants/public.route';
import { SignInDTO } from '../../dtos/sign-in.dto';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractFormComponent implements OnInit {

  constructor(
    private readonly _localeService: LocaleService,
    private readonly _authenticationService: AuthenticationService,
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

  public override save(): void {
    const controls = this._formGroup.controls;
    const signInDTO: SignInDTO = new SignInDTO(controls['email'].value, controls['password'].value);

    this._authenticationService.signIn(signInDTO).subscribe();
  }

}
