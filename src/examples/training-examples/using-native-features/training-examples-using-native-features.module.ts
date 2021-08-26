import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRAINING_EXAMPLES_USING_NATIVE_FEATURES_CONFIG } from './training-examples-using-native-features.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(TRAINING_EXAMPLES_USING_NATIVE_FEATURES_CONFIG)],
})
export class TrainingExamplesUsingNativeFeaturesModule {}
