import { NgModule } from '@angular/core';
import { ExampleComponent as SimpleCaseExample } from './components/simple-case/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_NGPLURAL_MODULE_CONFIG } from './ng-plural-directive.module.config';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(DIRECTIVES_NGPLURAL_MODULE_CONFIG)],
  exports: [],
  declarations: [SimpleCaseExample],
  providers: [],
})
export class NgPluralDirectiveModule {}
