import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as NgForParamsExample } from './components/use-ngFor-parameters/example.component';
import { ExampleComponent as NgForOptimizationExample } from './components/ngFor-optimization/example.component';
import { Routes } from '@angular/router';
import { NavItemData } from '../../../core/menu.service';

export const DIRECTIVES_NGFOR_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'simple-case',
  },
  {
    path: 'simple-case',
    data: {
      navItem: {
        name: 'NgFor basic example',
        documentationUrl: 'https://angular.io/api/common/NgForOf',
      } as NavItemData,
    },
    component: SimpleCaseExample,
  },
  {
    path: 'ngfor-params',
    data: {
      navItem: {
        name: 'NgFor parameters and extras',
        documentationUrl: 'https://angular.io/api/common/NgForOf#local-variables',
      } as NavItemData,
    },
    component: NgForParamsExample,
  },
  {
    path: 'ngfor-optimization',
    data: {
      navItem: {
        name: 'NgFor optimization (trackBy)',
        documentationUrl: 'https://angular.io/api/core/TrackByFunction#trackbyfunction',
      } as NavItemData,
    },
    component: NgForOptimizationExample,
  },
];
