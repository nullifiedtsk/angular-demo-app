import { NgModule } from '@angular/core';
import { ExampleComponent as SimpleCaseExample } from './components/example/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_NGSWITCH_MODULE_CONFIG } from './ng-switch-example.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(DIRECTIVES_NGSWITCH_MODULE_CONFIG)],
  exports: [],
  declarations: [SimpleCaseExample],
  providers: [],
})
export class NgSwitchExampleModule {}
