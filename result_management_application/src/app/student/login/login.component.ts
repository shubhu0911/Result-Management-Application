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

  loginStudent = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  get name() { return this.loginStudent.get('name'); }

  get password() {
    return this.loginStudent.get('password');
  }


  constructor(private commom_service: CommonService, private router: Router) {}

  ngOnInit(): void {}

  // @String
  
  loginUser() {
    this.commom_service.getStudents().subscribe((result:any)=> {
      const student = result.find((temp:any)=>{
        return ((temp.name === this.loginStudent.value.name) && (temp.password === this.loginStudent.value.password));
      })
      if(student != undefined) {
        this.loginStudent.reset();
        this.router.navigate(['student/find']);
      } else {
        this.alert = true;
      }

    })
  }

  closeAlert() {
    this.alert = false;
  }

  clearForm() {
    this.loginStudent.reset();
  }
}
