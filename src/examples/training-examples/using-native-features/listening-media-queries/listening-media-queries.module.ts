import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRAINING_EXAMPLES_LISTENING_MEDIA_QUERIES_CONFIG } from './listening-media-queries.module.config';
import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(TRAINING_EXAMPLES_LISTENING_MEDIA_QUERIES_CONFIG)],
  declarations: [
    fromComponents.CdkMediaMatcherExample,
    fromComponents.NativeMediaMatcherExample,
    fromComponents.BreakpointObserverExample,
  ],
})
export class TrainingExamplesListeningMediaQueriesExampleModule {}
