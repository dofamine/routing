import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly us: UserService
  ) { }

  ngOnInit() {
    this.user = this.us.getUserById(+this.route.snapshot.params.id);
  }
}
