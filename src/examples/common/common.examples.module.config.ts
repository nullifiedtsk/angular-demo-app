import { Routes } from '@angular/router';
import { COMMON_SIMPLE_EXAMPLE_MODULE_CONFIG } from './simple/simple-example.module-config';
import { COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG } from './styles-and-classes-bindings/styles-and-classes-bindings.module-config';
import { COMMON_SUB_COMPONENTS_EXAMPLE_MODULE_CONFIG } from './sub-components/sub-components-example.module-config';

export const COMMON_EXAMPLES_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'simple',
  },
  {
    path: 'simple',
    data: { navItem: { name: 'Simple Example', children: COMMON_SIMPLE_EXAMPLE_MODULE_CONFIG } },
    loadChildren: () => import('./simple/simple-example.module').then((x) => x.SimpleExampleModule),
  },
  {
    path: 'style-and-class-bindings',
    data: {
      navItem: { name: 'Styles and classes bindings', children: COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG },
    },
    loadChildren: () =>
      import('./styles-and-classes-bindings/styles-and-classes-bindings.module').then(
        (x) => x.StylesAndClassesBindingsExampleModule
      ),
  },
  {
    path: 'sub-components',
    data: { navItem: { name: 'Sub components example', children: COMMON_SUB_COMPONENTS_EXAMPLE_MODULE_CONFIG } },
    loadChildren: () =>
      import('./sub-components/sub-components-example.module').then((x) => x.SubComponentsExampleModule),
  },
];
