import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(){
      if(!this.authService.loggedIn()){
        return true;
      } else {
        this.router.navigate(['/dashboard']);
      }

  }
}
