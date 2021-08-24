import {Component} from "@angular/core";

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  text = '';

  onTextChanged($event: string) {
    this.text = $event;
  }
}
