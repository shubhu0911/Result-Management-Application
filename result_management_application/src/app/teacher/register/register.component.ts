import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  addTeacher = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private common_service:CommonService,private router: Router) {}

  ngOnInit(): void {}

  saveTeacher() {
    console.log(this.addTeacher.value);
    this.common_service.saveTeacher(this.addTeacher.value).subscribe((result)=>{
      console.log(result);
    })
    this.addTeacher.reset();
    this.router.navigate(['teacher/login']);
  }
  clearForm() {
    this.addTeacher.reset();
  }
}
