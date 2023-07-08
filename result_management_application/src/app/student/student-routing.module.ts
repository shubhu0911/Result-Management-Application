import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindResultComponent } from './find-result/find-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowResultComponent } from './show-result/show-result.component';

const routes: Routes = [
  {
    path: 'student',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'find',
        component: FindResultComponent,
      },
      {
        path: 'show/:id',
        component: ShowResultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
