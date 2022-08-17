import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizzesComponent,
    CreateQuizComponent,
    AddQuestionComponent,
    QuizQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
