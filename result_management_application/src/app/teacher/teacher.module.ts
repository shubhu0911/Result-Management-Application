import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListResultComponent } from './list-result/list-result.component';
import { AddResultComponent } from './add-result/add-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ListResultComponent,
    AddResultComponent,
    UpdateResultComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TeacherModule { }
