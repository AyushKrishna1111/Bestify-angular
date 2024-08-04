import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';
import { AboutThisSiteComponent } from './components/common/about-this-site/about-this-site.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/common/error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { AdminQuizPageComponent } from './components/admin/admin_quiz/admin-quiz-page/admin-quiz-page.component';
import { AdminGamePageComponent } from './components/admin/admin_game/admin-game-page/admin-game-page.component';
import { AdminPuzzlePageComponent } from './components/admin/admin_puzzle/admin-puzzle-page/admin-puzzle-page.component';
import { QuizAddComponent } from './components/admin/admin_quiz/quiz-add/quiz-add.component';
import { QuizAddQuestionComponent } from './components/admin/admin_quiz/quiz-add-question/quiz-add-question.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { PuzzleAddComponent } from './components/admin/admin_puzzle/puzzle-add/puzzle-add.component';
import { GamePageComponent } from './components/user/user_game/game-page/game-page.component';
import { PuzzlePageComponent } from './components/user/user_puzzle/puzzle-page/puzzle-page.component';
import { QuizCategoriesPageComponent } from './components/user/user_quiz/quiz-categories-page/quiz-categories-page.component';
import { QuizListPageComponent } from './components/user/user_quiz/quiz-list-page/quiz-list-page.component';
import { QuizDisplayComponent } from './components/user/user_quiz/quiz_page/quiz-display/quiz-display.component';
import { QuizDisplayQuestionComponent } from './components/user/user_quiz/quiz_page/quiz-display-question/quiz-display-question.component';
import { NgxSnakeComponent } from './components/user/user_game/ngx-snake/ngx-snake.component';
import { TetrisComponent } from './components/user/user_game/tetris/tetris.component'
import { StatusComponent } from './components/user/user_game/tetris/status/status.component';
import { NextComponent } from './components/user/user_game/tetris/next/next.component';
import { GlassComponent } from './components/user/user_game/tetris/glass/glass.component';
import { BoardComponent } from './components/user/user_game/tetris/board/board.component';
import { PixelComponent } from './components/user/user_game/tetris/board/pixel/pixel.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { FrontpageComponent } from './components/common/frontpage/frontpage.component';
import { QuizCountGraphComponent } from './components/admin/admin_quiz/quiz-count-graph/quiz-count-graph.component';
import { GameTopScorerComponent } from './components/admin/admin_game/game-top-scorer/game-top-scorer.component';
import { GamePlayedCountComponent } from './components/admin/admin_game/game-played-count/game-played-count.component';
import { UserHomepageComponent } from './components/user/user-homepage/user-homepage.component';
import { ContactUsComponent } from './components/common/about-developer/about-developer.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FrontpageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutThisSiteComponent,
    ErrorComponent,
    AdminHomepageComponent,
    AdminQuizPageComponent,
    AdminGamePageComponent,
    AdminPuzzlePageComponent,
    QuizAddComponent,
    QuizAddQuestionComponent,
    PuzzleAddComponent,
    GamePageComponent,
    PuzzlePageComponent,
    QuizCategoriesPageComponent,
    QuizListPageComponent,
    QuizDisplayComponent,
    QuizDisplayQuestionComponent,
    NgxSnakeComponent,
    TetrisComponent,
    StatusComponent,
    NextComponent,
    GlassComponent,
    BoardComponent,
    PixelComponent,
    ProfileComponent,
    QuizCountGraphComponent,
    GameTopScorerComponent,
    GamePlayedCountComponent,
    UserHomepageComponent,
    ContactUsComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
