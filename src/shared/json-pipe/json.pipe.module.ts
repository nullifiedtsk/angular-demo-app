import {NgModule} from '@angular/core';
import {JsonPipe} from "./json.pipe";

@NgModule({
  declarations: [JsonPipe],
  exports: [JsonPipe]
})
export class JsonPipeModule {
}
