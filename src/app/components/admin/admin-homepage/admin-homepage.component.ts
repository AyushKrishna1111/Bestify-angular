import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faGamepad, faPuzzlePiece, faFile , faQuestion} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})
export class AdminHomepageComponent implements OnInit {

  faQuestion = faQuestion;
  faGamepad = faGamepad;
  faPuzzlePiece=faPuzzlePiece;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
  }

  openQuizPage() : void {
    // console.log("button");
    this.router.navigate(['admin/quiz/createQuiz']);
  }

  openGamesPage() : void {
    // console.log("button");
    this.router.navigate(['admin/game/topScorer']);
  }

  openPuzzlePage() : void {
    // console.log("button");
    this.router.navigate(['admin/puzzle/addPuzzle']); 
  }

}
