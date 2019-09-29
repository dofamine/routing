import { Injectable } from "@angular/core";
import { User } from "./user/user.model";

@Injectable()
export class UserService {

  users: User[] = [
    {
      id: 2,
      name: 'Grisha',
      sex: 'male'
    },
    {
      id: 4,
      name: 'Petya',
      sex: 'male'
    }, {
      id: 8,
      name: 'Sveta',
      sex: 'female'
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find(({id: Uid}) => Uid === id);
  }
}
