import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DIRECTIVES_CUSTOM_DIRECTIVES_MODULE_CONFIG } from './custom-directives-example.module.config';
import { AutoFocusDirectiveDemoComponent } from './components/auto-focus-directive/example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    RouterModule.forChild(DIRECTIVES_CUSTOM_DIRECTIVES_MODULE_CONFIG),
  ],
  exports: [],
  declarations: [AutoFocusDirectiveDemoComponent],
  providers: [],
})
export class CustomDirectivesExampleModule {}
