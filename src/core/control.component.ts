import { ControlValueAccessor } from '@angular/forms';

/**
 * An boilerplace for control component that implements CVA.
 */
export abstract class ControlComponent<T> implements ControlValueAccessor {
  private _value!: T;
  onChangeFn: Function | undefined;
  onTouchedFn: Function | undefined;
  isDisabled = false;

  onWriteValue(value: T) {}

  onSetValue(value: T) {}

  onDisabledStateChange(disabled: boolean) {}

  coerceValue(value: T): T {
    return value;
  }

  writeValue(value: T) {
    value = this.coerceValue(value);
    this._value = value;
    this.onWriteValue(value);
  }

  setValue(value: T) {
    value = this.coerceValue(value);
    this.value = value;
  }

  set value(value: T) {
    if (this.isValueDiffers(value) && !this.isDisabled) {
      this._value = value;
      this.onSetValue(value);
      this.onChangeFn?.(value);
      this.onTouchedFn?.(value);
    }
  }

  get value() {
    return this._value;
  }

  isValueDiffers(nextValue: T) {
    return nextValue !== this._value;
  }

  registerOnChange(onChangeFn: Function) {
    this.onChangeFn = onChangeFn;
  }

  registerOnTouched(onTouchedFn: Function) {
    this.onTouchedFn = onTouchedFn;
  }

  setDisabledState(isDisabled: boolean) {
    if (this.isDisabled !== isDisabled) {
      this.isDisabled = isDisabled;
      this.onDisabledStateChange(isDisabled);
    }
  }
}
