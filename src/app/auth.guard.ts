import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginDataService } from './services/login-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private loginDataService:LoginDataService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean 
  {
    //console.log("ROUTE -> ",route);
    //console.log("state -> ",state);
    if(this.loginDataService.isLoggedIn()){
      
      if(this.loginDataService.isAdminLoggedIn()){
        if(state.url.startsWith("/admin")){
          return true;
        }
        else{
          this.router.navigate(['/login']);
        return false;
        }
      }

      if(this.loginDataService.isUserLoggedIn()){
        if(state.url.startsWith("/user")){
        return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
      }

    }
    
    this.router.navigate(['/login']);
    return false;
  }
  
}
