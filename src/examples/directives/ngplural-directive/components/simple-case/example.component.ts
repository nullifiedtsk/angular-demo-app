import { Component } from '@angular/core';

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  days = 0;

  pluralRule(num: number): any {
    num = Math.floor(Math.abs(num));
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 5) return 'few';
    if (num >= 5) return 'many';
  }
}
