import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginDataService } from 'src/app/services/login-data-service.service';
import { faGamepad, faPuzzlePiece, faSignOutAlt, faQuestion, faHome,faListAlt,faSignInAlt,faUserPlus,faUserCircle, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 // fontawesome icons 
 faEnvelope=faEnvelope;
 faUserCircle=faUserCircle;
 faListAlt=faListAlt;
 faHome=faHome;
 faQuestion = faQuestion;
 faGamepad = faGamepad;
 faPuzzlePiece=faPuzzlePiece;
 faSignOutAlt=faSignOutAlt;
 faSignInAlt=faSignInAlt;
 faUserPlus=faUserPlus;


  title = 'BestifyYourTime';

  isLoggedIn = false;
  username!: string;

  subscription:Subscription = {} as Subscription;

  constructor(private router : Router,private loginDataService: LoginDataService) { }

  redirectToHomePage():void {
    if(this.loginDataService.isAdminLoggedIn())
    this.router.navigate(['admin']);
    else if(this.loginDataService.isUserLoggedIn())
    this.router.navigate(['user']);
    else
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // console.log("header ngoninit");

    this.subscription = this.loginDataService.loginDataObservable
    .subscribe((status:boolean) => {
      //console.log("login status changed to -> "+status);
      this.loginUser(status);
    });

    if(this.loginDataService.isLoggedIn())
    this.loginUser(true);

  }

  loginUser(status:boolean):void{
    this.isLoggedIn = status;
    if (this.isLoggedIn) {
      const user = this.loginDataService.getUser();
      this.username = user.username;
    }
  }
  
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  logout() {
    this.loginDataService.changeLoginStatus(false);
    this.loginDataService.signOut();
    this.router.navigate(['/']);
  }

  gotoPage(url:string):void{
    if(url==='quiz'){
      if(this.loginDataService.isAdminLoggedIn())
      this.router.navigate(['admin/quiz/createQuiz']);
      else
      this.router.navigate(['user/quizzes']);
    }
    else if(url==='puzzle'){
      if(this.loginDataService.isAdminLoggedIn())
      this.router.navigate(['admin/puzzle/addPuzzle']);
      else
      this.router.navigate(['user/puzzles']);
    }
    else if(url==='game'){
      if(this.loginDataService.isAdminLoggedIn())
      this.router.navigate(['admin/game/topScorer']);
      else
      this.router.navigate(['user/games']);
    }
  }

}
