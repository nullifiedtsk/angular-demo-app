import { NgModule } from '@angular/core';
import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as NgForParamsExample } from './components/use-ngFor-parameters/example.component';
import { ExampleComponent as NgForOptimizationExample } from './components/ngFor-optimization/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DIRECTIVES_NGFOR_MODULE_CONFIG } from "./ng-for-example.module.config";

@NgModule({
  imports: [CommonModule, FormsModule, NgScrollbarModule, RouterModule.forChild(DIRECTIVES_NGFOR_MODULE_CONFIG)],
  exports: [],
  declarations: [SimpleCaseExample, NgForParamsExample, NgForOptimizationExample],
  providers: [],
})
export class NgForExampleModule {}
