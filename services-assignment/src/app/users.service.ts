import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

export class User {
  constructor(public id: number, public name: string, public status: 'active' | 'inactive') {}
}

@Injectable()
export class UsersService {
  users: User[] = [
    new User(0, 'Max', 'active'),
    new User(1, 'Anna', 'active'),
    new User(2, 'Chris', 'inactive'),
    new User(3, 'Manu', 'inactive'),
  ];

  constructor(private counterService: CounterService) {}

  updateStatus(id: number, status: 'active' | 'inactive'): void {
    const user = this.users.find(user => user.id === id);
    if (user) {
      user.status = status;
      this.counterService.updateUsers(status);
    }
  }
}