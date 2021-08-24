import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as InputCVAImplementationExample } from './components/control-value-accessor/example/example.component';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const DIRECTIVES_NGMODEL_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    data: {
      navItem: {
        name: 'Basic Example',
        documentationUrl: 'https://angular.io/guide/built-in-directives#ngmodel-and-value-accessors',
      } as NavItemData,
    },
    component: SimpleCaseExample,
  },
  {
    path: 'cva',
    data: {
      navItem: {
        name: 'Custom CVA Control Example',
        documentationUrl: 'https://angular.io/guide/built-in-directives#ngmodel-and-value-accessors',
      } as NavItemData,
    },
    component: InputCVAImplementationExample,
  },
];
