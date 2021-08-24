import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as UseNgIfAsVariableExample } from './components/use-ngif-as-alias/example/example.component';
import { Routes } from '@angular/router';
import { NgIfElseExampleComponent } from './components/ngif-else/example.component';
import { NavItemData } from '../../../core/menu.service';

export const DIRECTIVES_NGIF_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'simple',
  },
  {
    path: 'simple',
    data: {
      navItem: {
        name: 'NgIf Basic Example',
        documentationUrl: 'https://angular.io/api/common/NgIf',
      } as NavItemData,
    },
    component: SimpleCaseExample,
  },
  {
    path: 'aliases',
    data: {
      navItem: {
        name: 'NgIf With Alias Usage Example',
        documentationUrl: 'https://angular.io/api/common/NgIf#storing-a-conditional-result-in-a-variable',
      } as NavItemData,
    },
    component: UseNgIfAsVariableExample,
  },
  {
    path: 'ngif-else',
    data: {
      navItem: {
        name: 'NgIf With Else',
        documentationUrl: 'https://angular.io/api/common/NgIf#showing-an-alternative-template-using-else',
      } as NavItemData,
    },
    component: NgIfElseExampleComponent,
  },
];
