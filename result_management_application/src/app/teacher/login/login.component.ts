import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;

  loginTeacher = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private commom_service: CommonService, private router: Router) {}

  ngOnInit(): void {}

  login_Teacher() {
    console.log(this.loginTeacher.value);
    this.commom_service.getTeachers().subscribe((result: any) => {
      const teacher = result.find((temp: any) => {
        return (
          temp.name === this.loginTeacher.value.name &&
          temp.password === this.loginTeacher.value.password
        );
      });
      if (teacher != undefined) {
        this.loginTeacher.reset();
        this.router.navigate(['teacher/list']);
      } else {
        this.alert = true;
      }
    });
  }
  closeAlert() {
    this.alert = false;
  }

  clearForm() {
    this.loginTeacher.reset();
  }
}
