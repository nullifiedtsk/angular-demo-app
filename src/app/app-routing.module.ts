import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROOT_CONFIG } from './app-routing.module.config';

@NgModule({
  imports: [RouterModule.forRoot(ROOT_CONFIG)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
