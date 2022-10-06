import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class CounterService {
  activeUsers: number = 2;
  inactiveUsers: number = 2;

  @Output() counterUpdated = new EventEmitter<{active: number, inactive: number}>();

  updateUsers(status: 'active' | 'inactive'): void {
    if (status === 'active') {
      this.activeUsers += 1;
      this.inactiveUsers -= 1;
    } else if (status === 'inactive') {
      this.inactiveUsers += 1;
      this.activeUsers -= 1;
    }
    this.counterUpdated.emit({ active: this.activeUsers, inactive: this.inactiveUsers });
  }
}