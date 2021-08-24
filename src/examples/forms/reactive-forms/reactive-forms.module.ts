import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsSimpleExample } from './components/simple/simple.example';
import { ReactiveFormsFormGroupExample } from './components/form-group/form-group.example';
import { JsonPipeModule } from '../../../shared/json-pipe/json.pipe.module';
import { ReactiveFormsFormArrayExample } from './components/form-array/form-array.example';
import { ReactiveFormsCustomValidatorExample } from './components/custom-validator/custom-validator.example';
import { RouterModule } from '@angular/router';
import { FORMS_REACTIVE_MODULE_CONFIG } from './reactive-forms.module.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, JsonPipeModule, RouterModule.forChild(FORMS_REACTIVE_MODULE_CONFIG)],
  exports: [],
  declarations: [
    ReactiveFormsSimpleExample,
    ReactiveFormsFormGroupExample,
    ReactiveFormsFormArrayExample,
    ReactiveFormsCustomValidatorExample,
  ],
  providers: [],
})
export class ReactiveFormsExampleModule {}
