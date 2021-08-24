import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_MODULE_CONFIG } from './directives.examples.module.config';

@NgModule({
  imports: [RouterModule.forChild(DIRECTIVES_MODULE_CONFIG)],
})
export class DirectivesExamplesModule {
  constructor() {}
}
