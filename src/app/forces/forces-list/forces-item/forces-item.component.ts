import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Force } from '../../force.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-forces-item',
  templateUrl: './forces-item.component.html',
  styleUrls: ['./forces-item.component.css']
})
export class ForcesItemComponent implements OnInit {
  @Input() force: Force;
  @Input() index: number;

  constructor(private dataStorageService: DataStorageService){}


  ngOnInit() {
  }
  // onFetchData() {
  //   this.dataStorageService.fetchForces();
  // }
}
