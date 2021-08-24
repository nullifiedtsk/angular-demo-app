import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

/**
 * A validator function with params.
 * Takes params, combines it and returns inner validator function.
 * @param control - control to validate
 */
function nameValidator(minLength = 1, maxLength = 1000) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    if (control.value < minLength) {
      return { ageValidator: 'This name is too short.' };
    }
    if (control.value > maxLength) {
      return { ageValidator: 'Wow, how should we remember that?' };
    }
    return null;
  };
}

/**
 * A validator function without params, so id does not returns inner validator function.
 * @param control - control to validate
 */
function ageValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value < 0) {
    return { ageValidator: 'This person is not born yet!' };
  }
  if (control.value > 200) {
    return { ageValidator: `Sorry, but are we currently not accepting elves` };
  }
  return null;
}

/**
 * A validator function without params, so id does not returns inner validator function.
 * @param control - control to validate
 */
function genderValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  if (control.value !== 'male' && control.value !== 'female') {
    return { genderValidator: 'Who are you?' };
  }
  return null;
}

@Component({
  templateUrl: './custom-validator.example.html',
  styleUrls: ['./custom-validator.example.scss'],
})
export class ReactiveFormsCustomValidatorExample {
  persons: Person[] = [];

  complexFormValidator = (() => {
    if (this.form) {
      const { age, name, gender } = this.form.value as Person;
      if (name === 'Bob' && gender === 'female') {
        return { complexFormValidator: 'Sorry, bob, you are lying us' };
      }
    }
    return null;
  }).bind(this);

  form = new FormGroup(
    {
      name: new FormControl('', {
        validators: [Validators.required, nameValidator(1, 100)],
      }),
      age: new FormControl(null, {
        validators: [Validators.required, ageValidator],
      }),
      gender: new FormControl(null, {
        validators: [Validators.required, genderValidator],
      }),
    },
    { validators: [this.complexFormValidator] }
  );

  onSubmit() {
    if (this.form.valid) {
      this.persons.push(this.form.value);
      this.form.reset();
    }
  }

  getErrorsForControl(controlName: string) {
    return this.form.controls[controlName]?.errors;
  }
}
