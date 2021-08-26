import { Routes } from '@angular/router';
import { TRAINING_EXAMPLES_USING_NATIVE_FEATURES_CONFIG } from './using-native-features/training-examples-using-native-features.module.config';

export const TRAINING_EXAMPLES_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'using-native-features',
  },
  {
    path: 'using-native-features',
    data: { navItem: { name: 'Using Native Features', children: TRAINING_EXAMPLES_USING_NATIVE_FEATURES_CONFIG } },
    loadChildren: () =>
      import('./using-native-features/training-examples-using-native-features.module').then(
        (x) => x.TrainingExamplesUsingNativeFeaturesModule
      ),
  },
];
