import { TemplateDrivenFormsNgModelExample } from './components/ng-model/ng-model.example';
import { TemplateDrivenFormsNgModelWithCustomValidatorsExample } from './components/ng-model-with-custom-validators/ng-model-with-custom-validators.example';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const FORMS_TEMPLATE_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    data: {
      navItem: {
        name: 'Basic Example',
        documentationUrl: 'https://angular.io/guide/forms',
      } as NavItemData,
    },
    component: TemplateDrivenFormsNgModelExample,
  },
  {
    path: 'ngmodel-validation',
    data: {
      navItem: {
        name: 'Custom Template Driven Forms Validation Example',
        documentationUrl: 'https://angular.io/api/forms/NG_VALIDATORS',
      } as NavItemData,
    },
    component: TemplateDrivenFormsNgModelWithCustomValidatorsExample,
  },
];
