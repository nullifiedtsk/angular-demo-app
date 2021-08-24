import { ExampleComponent as ClassesBindingsExamples } from './classes/example.component';
import { Routes } from '@angular/router';
import { StylesBindingExamplesComponent } from './styles/example.component';
import { NavItemData } from '../../../core/menu.service';

export const COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'styles',
  },
  {
    path: 'styles',
    data: {
      navItem: {
        name: 'Styles bindings',
        documentationUrl: 'https://angular.io/guide/attribute-binding',
      } as NavItemData,
    },
    component: StylesBindingExamplesComponent,
  },
  {
    path: 'classes',
    data: {
      navItem: {
        name: 'Classes bindings',
        documentationUrl: 'https://angular.io/guide/attribute-binding',
      } as NavItemData,
    },
    component: ClassesBindingsExamples,
  },
];
