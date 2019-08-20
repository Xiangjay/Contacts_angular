import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router:Router
    ){ }
  canActivate() {
    const token = window.localStorage.getItem("contact_token");
    if(!token){
      this.router.navigate(["/login"]);
    }
    return true;
  }
}
