import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TRAINING_EXAMPLES_MODULE_CONFIG } from './training-examples.module.config';

@NgModule({
  imports: [RouterModule.forChild(TRAINING_EXAMPLES_MODULE_CONFIG)],
})
export class TrainingExamplesModule {
  constructor() {}
}
