import {Component} from "@angular/core";
import {UserModel} from "../models/user.model";

/**
 * Component directive marks class as component with some Angular metadata.
 * Minimal component configuration should contain at least `template` variable set.
 * To use component inside of markup you need to declare that component in the module / export component to make it available in other modules.
 *
 * template - inlined template
 * templateUrl - path to the template
 * styles - array of inlined styles
 * styleUrls - paths to the stylesheets
 * selector - selector can be used to render component from HTML markup.
 * providers - internal DI providers for component
 * encapsulation - style encapsulation of component. Use NONE to disable encapsulation (better not to use).
 * changeDetection - By default, ChangeDetectionStrategy.Default and triggers on each action plus timer.
 *                   Can be changed to OnPush - then change detection will trigger only if some of @Input variables will be changed
 *                   or change detector will be triggered manually.
 * animations - component animations providers. Animations can be used in component using [@animationName] decorator.
 * exportAs - allows to export some internal variables from the template.
 */
@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  currentUser: UserModel = {
    userName: 'Bob',
    userAge: 24,
    userGender: 'male'
  };

  updateCurrentUser($event: UserModel) {
    this.currentUser = $event;
  }
}
