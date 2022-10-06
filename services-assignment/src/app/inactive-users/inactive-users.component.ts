import { Component, Input } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) {}

  onSetToActive(user: User) {
    this.usersService.updateStatus(user.id, 'active');
  }
}
