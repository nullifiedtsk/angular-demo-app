import { NgModule } from '@angular/core';
import { ExampleComponent as ClassesBindingsExamples } from './classes/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StylesBindingExamplesComponent } from './styles/example.component';
import { COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG } from './styles-and-classes-bindings.module-config';

/**
 * NgModule directive marks class as Angular module with some Angular metadata.
 *
 * In ngModule you should declare all your module components, export all component you want to provide to other modules
 * and provide all the services you have used or you want to provide to other modules once this module is imported.
 * Also, you should specify all the imports you are going to use inside your module there.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COMMON_STYLES_AND_CLASSES_EXAMPLE_MODULE_CONFIG),
  ],
  exports: [],
  declarations: [ClassesBindingsExamples, StylesBindingExamplesComponent],
  providers: [],
})
export class StylesAndClassesBindingsExampleModule {}
