import {Component} from "@angular/core";

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  showBlock = false;

  toggleExtraInfo($event: boolean) {
    this.showBlock = $event;
  }
}
