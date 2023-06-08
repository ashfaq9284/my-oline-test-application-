import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'Welcome',pathMatch:'full'},
  {path:"Welcome",component:WelcomeComponent},
  {path:"Question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
