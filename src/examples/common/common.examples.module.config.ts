import { Routes } from '@angular/router';
import { SimpleExampleModule } from './simple/simple-example.module';
import { StylesAndClassesBindingsExampleModule } from './styles-and-classes-bindings/styles-and-classes-bindings.module';
import { SubComponentsExampleModule } from './sub-components/sub-components-example.module';
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
    loadChildren: () => SimpleExampleModule,
  },
  {
    path: 'style-and-class-bindings',
    data: {
      navItem: { name: 'Styles and classes bindings', children: COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG },
    },
    loadChildren: () => StylesAndClassesBindingsExampleModule,
  },
  {
    path: 'sub-components',
    data: { navItem: { name: 'Sub components example', children: COMMON_SUB_COMPONENTS_EXAMPLE_MODULE_CONFIG } },
    loadChildren: () => SubComponentsExampleModule,
  },
];
