import {Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUsers = DUMMY_USERS[randomIndex];

  // signals
  // selectedUsers = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => '/users/' + this.selectedUsers().avatar);

  // getter
  // get imagePath() {
  //   return '/users/'+ this.selectedUsers.avatar;
  // }

  @Input({required:true}) id!: string;
  @Input({required:true}) avatar! : string;
  @Input({required:true}) name! : string;
  @Input({required:true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUsers = DUMMY_USERS[randomIndex];

    // this.selectedUsers.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id);
  }
}
