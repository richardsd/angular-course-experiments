import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
    this.counterService.counterUpdated.subscribe((counter: { active: number, inactive: number }) => {
      console.log(`Active users: ${counter.active}`);
      console.log(`Inactive users: ${counter.inactive}`);
    } );
  }

  getUsers(status: 'active' | 'inactive'): User[] {
    return this.users.filter((user) => user.status === status);
  }
}
