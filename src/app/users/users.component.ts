import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { Router } from '@angular/router';
import { UserService } from "./user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private readonly router: Router,
    private readonly us: UserService
  ) { }

  ngOnInit() {
    this.users = this.us.getUsers();
  }

  goToUserPage(id: number) {
    this.router.navigate(['users', id], {queryParams: {name: "petya", surname: 'Ivanov'}});
  }
}
