import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';
import { TRAINING_EXAMPLES_LISTENING_MEDIA_QUERIES_CONFIG } from "./listening-media-queries/listening-media-queries.module.config";

export const TRAINING_EXAMPLES_USING_NATIVE_FEATURES_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'listening-media-queries',
  },
  {
    path: 'listening-media-queries',
    data: {
      navItem: {
        name: 'Listening Media Queries',
        documentationUrl: 'https://angular.io/guide/forms',
        children: TRAINING_EXAMPLES_LISTENING_MEDIA_QUERIES_CONFIG,
      } as NavItemData,
    },
    loadChildren: () =>
      import('./listening-media-queries/listening-media-queries.module').then(
        (x) => x.TrainingExamplesListeningMediaQueriesExampleModule
      ),
  },
];
