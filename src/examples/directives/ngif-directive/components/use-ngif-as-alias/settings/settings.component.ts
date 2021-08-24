import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-use-ngif-as-alias-user-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  @Output() userChange = new EventEmitter<UserModel>();

  @Input() set user (value: UserModel | undefined | null) {
    this.currentValue = value || {} as UserModel;
  }

  currentValue: UserModel = {} as UserModel;

  updateUser(update: Partial<UserModel>) {
    this.currentValue = { ...this.currentValue, ...update };
    this.userChange.emit(this.currentValue);
  }
}
