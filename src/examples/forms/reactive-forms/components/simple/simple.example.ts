import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  templateUrl: './simple.example.html',
  styleUrls: ['./simple.example.scss']
})
export class ReactiveFormsSimpleExample {
  formControl = new FormControl('value', [Validators.required]);
}
