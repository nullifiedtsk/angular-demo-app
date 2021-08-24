import { NgModule } from '@angular/core';
import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { ExampleComponent as InputCVAImplementationExample } from './components/control-value-accessor/example/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleInputComponent } from './components/control-value-accessor/input-cva-implementation/input.component';
import { DIRECTIVES_NGMODEL_MODULE_CONFIG } from './ng-model-example.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(DIRECTIVES_NGMODEL_MODULE_CONFIG)],
  exports: [],
  declarations: [SimpleCaseExample, InputCVAImplementationExample, ExampleInputComponent],
  providers: [],
})
export class NgModelExampleModule {}
