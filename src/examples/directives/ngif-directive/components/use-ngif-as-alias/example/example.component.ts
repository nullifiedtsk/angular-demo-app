import {Component} from "@angular/core";
import {UserModel} from "../models/user.model";

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  userModel?: UserModel;

  updateUser($event: UserModel) {
    this.userModel = $event;
  }
}
