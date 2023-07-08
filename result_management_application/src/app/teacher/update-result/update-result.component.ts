import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css'],
})
export class UpdateResultComponent implements OnInit {

  editResult = new FormGroup({
    rollno: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    score: new FormControl('',Validators.required),
  });

  constructor(
    private common_service: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // let racva_id = parseInt(this.route.snapshot.params['id']);
    // console.log(racva_id);
    this.common_service
      .getCurrentResult(this.route.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editResult = new FormGroup({
          rollno: new FormControl(result['rollno']),
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          score: new FormControl(result['score']),
        });
      });
  }

  updateResult() {
    this.common_service
      .updateResult(this.editResult.value, this.route.snapshot.params['id'])
      .subscribe((result) => {
        this.router.navigate([`teacher/list`]);
      });
  }
}
