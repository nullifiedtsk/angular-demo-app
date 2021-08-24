import { NgModule } from '@angular/core';
import { TemplateDrivenFormsNgModelExample } from './components/ng-model/ng-model.example';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  NgModelCustomBlackListValidatorDirective,
  TemplateDrivenFormsNgModelWithCustomValidatorsExample,
} from './components/ng-model-with-custom-validators/ng-model-with-custom-validators.example';
import { RouterModule } from '@angular/router';
import { FORMS_TEMPLATE_MODULE_CONFIG } from './template-driven-forms.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(FORMS_TEMPLATE_MODULE_CONFIG)],
  exports: [],
  declarations: [
    TemplateDrivenFormsNgModelExample,
    NgModelCustomBlackListValidatorDirective,
    TemplateDrivenFormsNgModelWithCustomValidatorsExample,
  ],
  providers: [],
})
export class TemplateDrivenFormsExampleModule {}
