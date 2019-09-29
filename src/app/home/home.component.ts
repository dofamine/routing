import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/guards/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public goToLessons() {
    this.router.navigate(['/lessons']);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
