import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  selector: 'app-sub-components-example-settings',
  templateUrl: './settings.component.html',
})
/**
 * This component will take an userModel as input and create a copy of UserModel and emit it once user field is changed.
 */
export class SettingsComponent {
  /**
   * Inputs and Outputs is native way to exchange data between components.
   */
  @Output() userChange = new EventEmitter<UserModel>();

  /**
   * You can also use setters with custom logic.
   */
  @Input() set user (value: UserModel | undefined | null) {
    this.currentValue = value || {} as UserModel;
  }

  currentValue: UserModel = {} as UserModel;

  /**
   * ChangeDetection in Angular may not trigger if object reference to the object is the same by default
   * So we need:
   * a) To assign new object to `currentValue` variable
   * b) To manually inject `ChangeDetectorRef` and call `markForCheck`/`detectChanges` method to inform detection is needed or manually run the detection once we changed the variable.
   */
  updateUser(update: Partial<UserModel>) {
    this.currentValue = { ...this.currentValue, ...update };
    this.userChange.emit(this.currentValue);
  }
}
