import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMMON_EXAMPLES_MODULE_CONFIG } from './common.examples.module.config';

@NgModule({
  imports: [RouterModule.forChild(COMMON_EXAMPLES_MODULE_CONFIG)],
})
export class CommonExamplesModule {
  constructor() {}
}
