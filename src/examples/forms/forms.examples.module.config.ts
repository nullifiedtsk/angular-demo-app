import { Routes } from '@angular/router';
import { TemplateDrivenFormsExampleModule } from './template-driven-forms/template-driven-forms.module';
import { ReactiveFormsExampleModule } from './reactive-forms/reactive-forms.module';
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
    loadChildren: () => ReactiveFormsExampleModule,
  },
  {
    path: 'template-driven',
    data: { navItem: { name: 'Template Driven Forms', children: FORMS_TEMPLATE_MODULE_CONFIG } },
    loadChildren: () => TemplateDrivenFormsExampleModule,
  },
];
