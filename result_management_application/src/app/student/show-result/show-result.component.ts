import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  collections: any ;

  constructor(private common_service : CommonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.common_service
      .getCurrentResult(this.route.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.collections = result;
      });
  }

}
