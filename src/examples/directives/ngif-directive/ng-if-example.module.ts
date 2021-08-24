import { NgModule } from '@angular/core';
import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as UseNgIfAsVariableExample } from './components/use-ngif-as-alias/example/example.component';
import { SettingsComponent as UseNgIfAsVariableSettings } from './components/use-ngif-as-alias/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIfElseExampleComponent } from './components/ngif-else/example.component';
import { DIRECTIVES_NGIF_MODULE_CONFIG } from './ng-if-example.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(DIRECTIVES_NGIF_MODULE_CONFIG)],
  exports: [],
  declarations: [SimpleCaseExample, UseNgIfAsVariableExample, UseNgIfAsVariableSettings, NgIfElseExampleComponent],
  providers: [],
})
export class NgIfExampleModule {}
