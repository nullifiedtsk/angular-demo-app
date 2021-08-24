import { ExampleComponent as SimpleCaseExample } from './components/example/example.component';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const DIRECTIVES_NGSWITCH_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    data: {
      navItem: {
        name: 'Basic Example',
        documentationUrl: 'https://angular.io/api/common/NgSwitch'
      } as NavItemData,
    },
    component: SimpleCaseExample,
  },
];
