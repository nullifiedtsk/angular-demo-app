import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

@Component({
  templateUrl: './form-group.example.html',
  styleUrls: ['./form-group.example.scss']
})
export class ReactiveFormsFormGroupExample {
  persons: Person[] = [];

  form = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
    'age': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(200)]),
    'gender': new FormControl(null, [Validators.required])
  });

  onSubmit() {
    if (this.form.valid) {
      this.persons.push(this.form.value);
      this.form.reset();
    }
  }
}
