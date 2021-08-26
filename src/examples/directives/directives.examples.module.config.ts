import { Routes } from '@angular/router';
import { DIRECTIVES_NGFOR_MODULE_CONFIG } from './ngfor-directive/ng-for-example.module.config';
import { DIRECTIVES_NGIF_MODULE_CONFIG } from './ngif-directive/ng-if-example.module.config';
import { DIRECTIVES_NGMODEL_MODULE_CONFIG } from './ngmodel-directive/ng-model-example.module.config';
import { DIRECTIVES_NGSWITCH_MODULE_CONFIG } from './ngswitch-directive/ng-switch-example.module.config';
import { DIRECTIVES_NGPLURAL_MODULE_CONFIG } from './ngplural-directive/ng-plural-directive.module.config';

export const DIRECTIVES_MODULE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'ngfor',
  },
  {
    path: 'ngfor',
    data: { navItem: { name: 'NgFor directive Examples', children: DIRECTIVES_NGFOR_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./ngfor-directive/ng-for-example.module').then((x) => x.NgForExampleModule);
    },
  },
  {
    path: 'ngif',
    data: { navItem: { name: 'NgIf Directive Examples', children: DIRECTIVES_NGIF_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./ngif-directive/ng-if-example.module').then((x) => x.NgIfExampleModule);
    },
  },
  {
    path: 'ngmodel',
    data: { navItem: { name: 'NgModel Directive Examples', children: DIRECTIVES_NGMODEL_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./ngmodel-directive/ng-model-example.module').then((x) => x.NgModelExampleModule);
    },
  },
  {
    path: 'ngswitch',
    data: { navItem: { name: 'NgSwitch Directive Examples', children: DIRECTIVES_NGSWITCH_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./ngswitch-directive/ng-switch-example.module').then((x) => x.NgSwitchExampleModule);
    },
  },
  {
    path: 'ngplural',
    data: { navItem: { name: 'NgPluiral Directive Examples', children: DIRECTIVES_NGPLURAL_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./ngplural-directive/ng-plural-directive.module').then((x) => x.NgPluralDirectiveModule);
    },
  },
  {
    path: 'custom',
    data: { navItem: { name: 'Custom Directives Examples', children: DIRECTIVES_NGPLURAL_MODULE_CONFIG } },
    loadChildren: () => {
      return import('./custom-directives/custom-directives-example.module').then(
        (x) => x.CustomDirectivesExampleModule
      );
    },
  },
];
