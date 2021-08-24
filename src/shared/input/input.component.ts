import {Component, forwardRef} from "@angular/core";
import {ControlComponent} from "../../core/control.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.scss'],
  template:
  `
    <div class="container">
      <input type="text" [ngModel]="value" (ngModelChange)="setValue($event)" />
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useClass: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ControlComponent<string> {
}
