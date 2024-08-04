import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGamePageComponent } from './components/admin/admin_game/admin-game-page/admin-game-page.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { AdminPuzzlePageComponent } from './components/admin/admin_puzzle/admin-puzzle-page/admin-puzzle-page.component';
import { AdminQuizPageComponent } from './components/admin/admin_quiz/admin-quiz-page/admin-quiz-page.component';
import { AboutThisSiteComponent } from './components/common/about-this-site/about-this-site.component';
import { ErrorComponent } from './components/common/error/error.component';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';
import { PuzzlePageComponent } from './components/user/user_puzzle/puzzle-page/puzzle-page.component';
import { GamePageComponent } from './components/user/user_game/game-page/game-page.component';
import { QuizListPageComponent } from './components/user/user_quiz/quiz-list-page/quiz-list-page.component';
import { QuizCategoriesPageComponent } from './components/user/user_quiz/quiz-categories-page/quiz-categories-page.component';
import { QuizDisplayComponent } from './components/user/user_quiz/quiz_page/quiz-display/quiz-display.component';
import { NgxSnakeComponent } from './components/user/user_game/ngx-snake/ngx-snake.component';
import { TetrisComponent } from './components/user/user_game/tetris/tetris.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { FrontpageComponent } from './components/common/frontpage/frontpage.component';
import { QuizCountGraphComponent } from './components/admin/admin_quiz/quiz-count-graph/quiz-count-graph.component';
import { QuizAddComponent } from './components/admin/admin_quiz/quiz-add/quiz-add.component';
import { GameTopScorerComponent } from './components/admin/admin_game/game-top-scorer/game-top-scorer.component';
import { GamePlayedCountComponent } from './components/admin/admin_game/game-played-count/game-played-count.component';
import { PuzzleAddComponent } from './components/admin/admin_puzzle/puzzle-add/puzzle-add.component';
import { UserHomepageComponent } from './components/user/user-homepage/user-homepage.component';
import { ContactUsComponent } from './components/common/about-developer/about-developer.component';

const routes: Routes = [
  {path:'admin',component:AdminHomepageComponent,canActivate:[AuthGuard]},
  
  {path:'admin/puzzle',component:AdminPuzzlePageComponent,canActivate:[AuthGuard],
  children:[
    {path:'addPuzzle',component:PuzzleAddComponent,canActivate:[AuthGuard]}
  ]
  },
  
  {path:'admin/game',component:AdminGamePageComponent,canActivate:[AuthGuard],
  children:[
    {path:'topScorer',component:GameTopScorerComponent,canActivate:[AuthGuard]},
    {path:'gamesPlayedCount',component:GamePlayedCountComponent,canActivate:[AuthGuard]}
  ]
  },
  
  {
  path:'admin/quiz',component:AdminQuizPageComponent,canActivate:[AuthGuard],
  children:
  [
  {path:'quizCountGraph',component:QuizCountGraphComponent,canActivate:[AuthGuard]},
  {path:'createQuiz',component:QuizAddComponent,canActivate:[AuthGuard]}
  ]
  },
  
  {path:'userboard',component:FrontpageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutThisSiteComponent},
  {path:'',component:FrontpageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'contact',component:ContactUsComponent},
  
  {path:'user',component:UserHomepageComponent,canActivate:[AuthGuard]},
  {path:'user/quizzes',component:QuizCategoriesPageComponent,canActivate:[AuthGuard]},
  {path:'user/quizzes/quizcategories/:quiz_cat_id',component:QuizListPageComponent,canActivate:[AuthGuard]},
  {path:'user/quizzes/quizcategories/:quiz_cat_id/quiz/:quiz_id',component:QuizDisplayComponent,canActivate:[AuthGuard]},

  {path:'user/puzzles',component:PuzzlePageComponent,canActivate:[AuthGuard]},

  {path:'user/games',component:GamePageComponent,canActivate:[AuthGuard]},
  {path:'user/games/snake',component:NgxSnakeComponent,canActivate:[AuthGuard]},
  {path:'user/games/tetris',component:TetrisComponent,canActivate:[AuthGuard]},


  {
    // wildcard 
    path: '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
