import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { FormControlModel } from "./models/form-control.model";

export abstract class AbstractFormComponent {
  private readonly _formControls: Array<FormControlModel>;
  private readonly _formGroup: FormGroup = new FormGroup({});

  constructor(formControls: Array<FormControlModel>) {
    this._formControls = formControls;

    this._initializeFormGroup(formControls);
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  private _initializeFormGroup(formControls: Array<FormControlModel>): void {
    for (const formControl of formControls) {
      const validators: Array<ValidatorFn> = Array<ValidatorFn>();

      for (const rule of formControl.rules) {
        const validator = rule as keyof ValidatorFn;

        validators.push(Validators[validator]);
      }

      const controler = new FormControl(formControl.default, validators);

      this._formGroup.addControl(formControl.name, controler);
    }
  }

  public isFormValid(): boolean {
    const controls = this._formGroup.controls;

    for (const formControl of this._formControls) {
      if (controls[formControl.name].valid === false) {
        return false;
      }
    }

    return true;
  }

  public abstract save(): void;
}
