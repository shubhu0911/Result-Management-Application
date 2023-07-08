import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {
  collections: any = [];

  constructor(private common_service : CommonService) { }

  ngOnInit(): void {
    this.common_service.getList().subscribe((result) => {
      console.warn(result);
      this.collections = result;
    });
  }

  deleteResult(id: any) {
    this.collections.splice(id-1,1);
    this.common_service.deleteResult(id).subscribe((result) => {
      console.log('Delete hello ' + result);
    });
  }
  

}
