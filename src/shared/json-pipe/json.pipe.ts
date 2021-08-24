import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'json'
})
export class JsonPipe implements PipeTransform {
  transform(value: any): any {
    return JSON.stringify(value, null, 2);
  }
}
