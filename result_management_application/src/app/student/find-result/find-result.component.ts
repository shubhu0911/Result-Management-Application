import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {
  alert: boolean = false;

  findResult = new FormGroup({
    rollno: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required)
  });

  constructor(private commom_service: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  searchResult() {
    this.commom_service.getList().subscribe((result:any)=> {
      const temp_result = result.find((temp:any)=>{
        return ((temp.rollno === this.findResult.value.rollno) && (temp.name === this.findResult.value.name));
      })
      if(temp_result != undefined) {

        this.findResult.reset();
        this.router.navigate([`student/show/${temp_result.id}`]);
      } else {
        this.alert = true;
      }

    })
  }

  closeAlert() {
    this.alert = false;
  }

  clearForm() {
    this.findResult.reset();
  }

}
