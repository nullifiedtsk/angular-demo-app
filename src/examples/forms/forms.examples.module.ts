import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FORMS_EXAMPLES_MODULE_CONFIG } from './forms.examples.module.config';

@NgModule({
  imports: [RouterModule.forChild(FORMS_EXAMPLES_MODULE_CONFIG)],
})
export class FormsExamplesModule {
  constructor() {}
}
