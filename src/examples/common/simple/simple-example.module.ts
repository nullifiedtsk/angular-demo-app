import { NgModule } from '@angular/core';
import { ExampleComponent } from './components/example.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_SIMPLE_EXAMPLE_MODULE_CONFIG } from "./simple-example.module-config";

/**
 * NgModule directive marks class as Angular module with some Angular metadata.
 *
 * In ngModule you should declare all your module components, export all component you want to provide to other modules
 * and provide all the services you have used or you want to provide to other modules once this module is imported.
 * Also, you should specify all the imports you are going to use inside your module there.
 */
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(COMMON_SIMPLE_EXAMPLE_MODULE_CONFIG),
  ],
  exports: [],
  declarations: [ExampleComponent],
  providers: [],
})
export class SimpleExampleModule {}
