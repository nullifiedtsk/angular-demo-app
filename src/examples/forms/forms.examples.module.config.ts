import { Routes } from '@angular/router';
import { FORMS_REACTIVE_MODULE_CONFIG } from './reactive-forms/reactive-forms.module.config';
import { FORMS_TEMPLATE_MODULE_CONFIG } from './template-driven-forms/template-driven-forms.module.config';

export const FORMS_EXAMPLES_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'reactive',
  },
  {
    path: 'reactive',
    data: { navItem: { name: 'Reactive Driven Forms', children: FORMS_REACTIVE_MODULE_CONFIG } },
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then((x) => x.ReactiveFormsExampleModule),
  },
  {
    path: 'template-driven',
    data: { navItem: { name: 'Template Driven Forms', children: FORMS_TEMPLATE_MODULE_CONFIG } },
    loadChildren: () =>
      import('./template-driven-forms/template-driven-forms.module').then((x) => x.TemplateDrivenFormsExampleModule),
  },
];
