import { ReactiveFormsSimpleExample } from './components/simple/simple.example';
import { ReactiveFormsFormGroupExample } from './components/form-group/form-group.example';
import { ReactiveFormsFormArrayExample } from './components/form-array/form-array.example';
import { ReactiveFormsCustomValidatorExample } from './components/custom-validator/custom-validator.example';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const FORMS_REACTIVE_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    data: {
      navItem: {
        name: 'Basic Example',
        documentationUrl: 'https://angular.io/guide/reactive-forms',
      } as NavItemData,
    },
    component: ReactiveFormsSimpleExample,
  },
  {
    path: 'formgroup',
    data: {
      navItem: {
        name: 'Form Group Example',
        documentationUrl: 'https://angular.io/guide/reactive-forms#grouping-form-controls',
      } as NavItemData,
    },
    component: ReactiveFormsFormGroupExample,
  },
  {
    path: 'formarray',
    data: {
      navItem: {
        name: 'Form Array Example',
        documentationUrl: 'https://angular.io/guide/reactive-forms#creating-dynamic-forms',
      } as NavItemData,
    },
    component: ReactiveFormsFormArrayExample,
  },
  {
    path: 'customvalidator',
    data: {
      navItem: {
        name: 'Custom Validators Example',
        documentationUrl: 'https://angular.io/guide/form-validation#defining-custom-validators',
      } as NavItemData,
    },
    component: ReactiveFormsCustomValidatorExample,
  },
];
