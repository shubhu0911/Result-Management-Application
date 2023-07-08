import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  addStudent = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private commom_service:CommonService,private router: Router) {}

  ngOnInit(): void {}

  saveUser() {
    console.log(this.addStudent.value);
    this.commom_service.saveStudent(this.addStudent.value).subscribe((result)=>{
      console.log(result);
    })
    this.addStudent.reset();
    this.router.navigate(['student/login']);
  }

  clearForm() {
    this.addStudent.reset();
  }
}
