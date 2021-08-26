import { AutoFocusDirectiveDemoComponent } from './components/auto-focus-directive/example.component';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const DIRECTIVES_CUSTOM_DIRECTIVES_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'simple-case',
  },
  {
    path: 'auto-focus-directive',
    data: {
      navItem: {
        name: 'AutoFocus directive',
        documentationUrl: 'https://angular.io/api/common/NgForOf',
      } as NavItemData,
    },
    component: AutoFocusDirectiveDemoComponent,
  },
];
