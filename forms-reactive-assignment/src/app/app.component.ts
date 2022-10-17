import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptionForm: FormGroup;
  submitted = false;
  defaultSubscription = 'advanced';
  subscription = {
    name: '',
    email: '',
    type: '',
  };

  constructor() {
    this.subscriptionForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subscription': new FormControl(this.defaultSubscription, Validators.required),
    });
  }

  forbiddenProjectName(control: FormControl): Promise<ValidationErrors> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        const forbiddenNames = ['Test', 'test'];
        const forbidden = forbiddenNames.indexOf(control.value) >= 0;
        resolve(forbidden ? {forbiddenProjectName: control.value} : null);
      }, 2000);
    });
  };

  onSubmit() {
    this.submitted = true;
    this.subscription.email = this.subscriptionForm.value.email;
    this.subscription.name = this.subscriptionForm.value.projectName;
    this.subscription.type = this.subscriptionForm.value.subscription;
    this.subscriptionForm.reset({
      projectName: '',
      email: '',
      subscription: this.defaultSubscription,
    });
  }
}
