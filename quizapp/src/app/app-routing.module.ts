import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';

const routes: Routes = [
  { path: '', redirectTo: '/quizzes', pathMatch: 'full' },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'add-question', component: AddQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
