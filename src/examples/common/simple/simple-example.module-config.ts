import { ExampleComponent } from './components/example.component';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const COMMON_SIMPLE_EXAMPLE_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'example',
  },
  {
    path: 'example',
    data: {
      navItem: { name: 'Example', documentationUrl: 'https://angular.io/guide/architecture-components' } as NavItemData,
    },
    component: ExampleComponent,
  },
];
