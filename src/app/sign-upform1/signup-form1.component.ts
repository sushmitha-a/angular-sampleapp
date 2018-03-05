import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form1',
  templateUrl: './signup-form1.component.html',
  styleUrls: ['./signup-form1.component.css']
})
export class SignupForm1Component {
 form = new FormGroup({
      username : new FormControl('',[Validators.required,UsernameValidator.userNameError],UsernameValidator.shouldBeUnique),
 });
get username() {
  return this.form.get('username');
}

}
