import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';

  constructor() {}

  canResetUsername(): boolean {
    return this.username !== ''; 
  }

  resetUsername(): void {
    if (this.canResetUsername()) {
      this.username = '';
    }
  }
}
