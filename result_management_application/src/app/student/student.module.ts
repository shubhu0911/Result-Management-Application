import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FindResultComponent } from './find-result/find-result.component';
import { ShowResultComponent } from './show-result/show-result.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FindResultComponent,
    ShowResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentModule { }
