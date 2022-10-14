import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') subscriptionForm: NgForm;
  subscriptionOptions: ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'advanced';
  subscription = {
    email: '',
    password: '',
    type: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.subscription.email = this.subscriptionForm.value.email;
    this.subscription.password = this.subscriptionForm.value.password;
    this.subscription.type = this.subscriptionForm.value.subscription;
    // reset the form to include the default subscription
    this.subscriptionForm.resetForm({
      email: '',
      password: '',
      subscription: this.defaultSubscription,
    });
  }
}
