import {Component} from "@angular/core";

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  value = 0;

  increase() {
    this.value++;
  }
}
