import { Component, Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/**
 * Check how Angular validators is designed in ReactiveForms examples.
 * In this case this is a blacklist validator.
 * This function is really a constructor function once called will return a real validator that will use passed args.
 */
function customBlackListValidator(opts?: { blackListedValues?: string[] }) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (opts?.blackListedValues?.includes(control.value)) {
      return { customBlackListValidator: true };
    }
    return null;
  };
}

/**
 * The tricks is to internally wrap `customBlackListValidator` into a directive
 * that will provide `NG_VALIDATORS` to the `ngModel` directive.
 *
 * So our deal is to provide directive as NG_VALIDATOR as to internally call
 * customBlackListValidator with args based on our input params.
 */
@Directive({
  selector: '[customBlackListValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NgModelCustomBlackListValidatorDirective,
      multi: true,
    },
  ],
})
export class NgModelCustomBlackListValidatorDirective implements Validator {
  @Input() customBlackListValidator = [] as string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    return customBlackListValidator({ blackListedValues: this.customBlackListValidator || [] })(control);
  }
}

@Component({
  templateUrl: './ng-model-with-custom-validators.example.html',
  styleUrls: ['./ng-model-with-custom-validators.example.scss'],
})
export class TemplateDrivenFormsNgModelWithCustomValidatorsExample {
  items: string[] = [];
  newBlacklistItem = '';
  textValue = '';

  addItem() {
    const val = (this.newBlacklistItem || '').trim();

    if (val) {
      this.items = this.items.concat(val);
    }

    this.newBlacklistItem = '';
  }

  deleteItem(name: string) {
    this.items = this.items.filter((x) => x !== name);
  }
}
