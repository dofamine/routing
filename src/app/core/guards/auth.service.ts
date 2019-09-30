import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated = false;

  getAuthentication(): Promise<boolean> {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.isAuthenticated);
      }, 1000);
    });
  }

  login() {
    this.isAuthenticated = true;
    alert('you have been authorized');
  }

  logout() {
    this.isAuthenticated = false;
    alert('you have been logout');
  }
}
