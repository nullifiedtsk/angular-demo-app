import { Routes } from '@angular/router';
import { COMMON_EXAMPLES_MODULE_CONFIG } from '../examples/common/common.examples.module.config';
import { DIRECTIVES_MODULE_CONFIG } from '../examples/directives/directives.examples.module.config';
import { FORMS_EXAMPLES_MODULE_CONFIG } from '../examples/forms/forms.examples.module.config';

export const ROOT_CONFIG: Routes = [
  {
    path: 'common',
    data: { navItem: { name: 'Common examples', children: COMMON_EXAMPLES_MODULE_CONFIG } },
    loadChildren: () => import('../examples/common/common.examples.module').then((x) => x.CommonExamplesModule),
  },
  {
    path: 'directives',
    data: { navItem: { name: 'Directives', children: DIRECTIVES_MODULE_CONFIG } },
    loadChildren: () =>
      import('../examples/directives/directives.examples.module').then((x) => x.DirectivesExamplesModule),
  },
  {
    path: 'forms',
    data: { navItem: { name: 'Forms', children: FORMS_EXAMPLES_MODULE_CONFIG } },
    loadChildren: () => import('../examples/forms/forms.examples.module').then((x) => x.FormsExamplesModule),
  },
];
