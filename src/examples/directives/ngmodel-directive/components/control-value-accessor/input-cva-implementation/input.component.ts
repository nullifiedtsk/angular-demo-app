import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: `app-control-value-accessor-example-input`,
  template: ` <input type="text" [ngModel]="value" (ngModelChange)="setValue($event)" (blur)="onTouched()" /> `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExampleInputComponent),
      multi: true,
    },
  ],
})
export class ExampleInputComponent implements ControlValueAccessor {
  private _value = '';

  isDisabled = false;

  // Boilerplate callback function.
  // You should call it to inform the view on value is changed.
  onChangeFn: Function | undefined;

  // Boilerplate callback function.
  // You should call it when control losts focus (or should be marked as `touched`)
  onTouchedFn: Function | undefined;

  set value($event: string) {
    this._value = $event;
  }

  get value() {
    return this._value;
  }

  /**
   * This method is called from UI and should inform NgModel/FormControl about pending changes.
   * Once we changed the value of INPUT we need to inform the UI about the change passing new value via `onChangeFn` call.
   * So, registerOnChange registers change listener function
   *     then on change cames we should pass new value to registered function
   *     so, we need to call `onChangeFn?.(newValue)`
   */
  setValue($event: string) {
    if (this.value !== $event) {
      this.value = $event;
      // Call change callback to inform value is changed.
      this.onChangeFn?.(this._value);
    }
  }

  /**
   * In this case we want to mark component as TOUCHED only when input lost focus.
   */
  onTouched() {
    this.onTouchedFn?.(this._value);
  }

  /**
   * This method is called when programatic change occur (e.g. when we got new value from parent component)
   * We are not going to call `onChangeFn` there since this update is came from UI since parent already knows this value.
   */
  writeValue(newValue: string) {
    if (this._value !== newValue) {
      this._value = newValue;
    }
  }

  /**
   * [ngModel] / [formControl] directive will pass pass the `onTouchedFn` into this function once control is set up.
   * We need to keep it to call it further when component value is changed.
   */
  registerOnChange(onChangeFn: Function) {
    this.onChangeFn = onChangeFn;
  }

  /**
   * [ngModel] / [formControl] directive will pass pass the `onTouchedFn` into this function once control is set up.
   * We need to keep it to call it further when component is touched.
   */
  registerOnTouched(onTouchedFn: Function) {
    this.onTouchedFn = onTouchedFn;
  }

  /**
   * [ngModel] / [formControl] directive will call this method (ControlValueAccessor interface) once disabled state is changed.
   * @param isDisabled - new disabled state
   */
  setDisabledState(isDisabled: boolean) {
    if (this.isDisabled !== isDisabled) {
      this.isDisabled = isDisabled;
    }
  }
}
