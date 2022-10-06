import { Component, Input } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UsersService) {}

  onSetToInactive(user: User) {
    this.userService.updateStatus(user.id, 'inactive');
  }
}
