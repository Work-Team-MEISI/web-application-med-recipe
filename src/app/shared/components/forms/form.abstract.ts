import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";
import { FormControlModel } from "./models/form-control.model";

export abstract class AbstractFormComponent {
  private readonly _formControls: Array<FormControlModel>;
  private readonly _form: FormGroup = new FormGroup({});

  constructor(formControls: Array<FormControlModel>) {
    this._formControls = formControls;

    this._initializeFormGroup(formControls);
  }

  protected get form(): FormGroup {
    return this._form;
  }

  private _initializeFormGroup(formControls: Array<FormControlModel>): void {
    for (const formControl of formControls) {
      const validators = formControl.rules as keyof ValidatorFn;

      this._form.addControl(formControl.name, new FormControl(formControl.default, validators))
    }
  }

  protected isFormValid(): boolean {
    const controls = this._form.controls;

    for (const formControl of this._formControls) {
      if (controls[formControl.name].valid === false) {
        return false;
      }
    }

    return true;
  }
}
