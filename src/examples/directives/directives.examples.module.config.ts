import { Routes } from '@angular/router';
import { NgForExampleModule } from './ngfor-directive/ng-for-example.module';
import { NgIfExampleModule } from './ngif-directive/ng-if-example.module';
import { NgModelExampleModule } from './ngmodel-directive/ng-model-example.module';
import { NgSwitchExampleModule } from './ngswitch-directive/ng-switch-example.module';
import { NgPluralDirectiveModule } from './ngplural-directive/ng-plural-directive.module';
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
    loadChildren: () => NgForExampleModule,
  },
  {
    path: 'ngif',
    data: { navItem: { name: 'NgIf Directive Examples', children: DIRECTIVES_NGIF_MODULE_CONFIG } },
    loadChildren: () => NgIfExampleModule,
  },
  {
    path: 'ngmodel',
    data: { navItem: { name: 'NgModel Directive Examples', children: DIRECTIVES_NGMODEL_MODULE_CONFIG } },
    loadChildren: () => NgModelExampleModule,
  },
  {
    path: 'ngswitch',
    data: { navItem: { name: 'NgSwitch Directive Examples', children: DIRECTIVES_NGSWITCH_MODULE_CONFIG } },
    loadChildren: () => NgSwitchExampleModule,
  },
  {
    path: 'ngplural',
    data: { navItem: { name: 'NgPluiral Directive Examples', children: DIRECTIVES_NGPLURAL_MODULE_CONFIG } },
    loadChildren: () => NgPluralDirectiveModule,
  },
];
