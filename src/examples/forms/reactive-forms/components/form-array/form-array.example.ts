import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

@Component({
  templateUrl: './form-array.example.html',
  styleUrls: ['./form-array.example.scss'],
})
export class ReactiveFormsFormArrayExample {
  persons: Person[] = [];

  form = new FormArray([]);

  constructor() {
    this.addRow();
  }

  createNewPersonControl() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
      age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(200)]),
      gender: new FormControl(null, [Validators.required]),
    });
  }

  deleteRow(index: number) {
    this.form.removeAt(index);
  }

  addRow() {
    this.form.push(this.createNewPersonControl());
  }

  submitForm() {
    if (this.form.valid) {
      this.persons.push(...(this.form.value as Person[]));
      this.form.clear();
      this.addRow();
    }
  }
}
