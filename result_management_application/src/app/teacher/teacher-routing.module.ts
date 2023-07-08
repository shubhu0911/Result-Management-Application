import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResultComponent } from './add-result/add-result.component';
import { ListResultComponent } from './list-result/list-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateResultComponent } from './update-result/update-result.component';

const routes: Routes = [
  {
    path: 'teacher',
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
        path: 'add',
        component: AddResultComponent,
      },
      {
        path: 'update/:id',
        component: UpdateResultComponent,
      },
      {
        path: 'list',
        component: ListResultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
