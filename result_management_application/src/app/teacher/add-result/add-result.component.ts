import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css'],
})
export class AddResultComponent implements OnInit {
  alert: boolean = false;

  addResult = new FormGroup({
    rollno: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    score: new FormControl('',Validators.required)
  });
  
  constructor(private common_service: CommonService) {}

  ngOnInit(): void {}

  collectResult() {
    this.common_service.saveResult(this.addResult.value).subscribe((result) => {
      this.alert = true;
      this.addResult.reset();
    });
  }

  closeAlert() {
    this.alert = false;
  }

  clearForm() {
    this.addResult.reset();
  }
}
