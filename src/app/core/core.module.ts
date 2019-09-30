import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./guards/auth.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuardService, AuthService],
})
export class CoreModule { }
