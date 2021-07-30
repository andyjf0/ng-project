import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private dataStorageService: DataStorageService) { }

  // onFetchData() {
  //   this.dataStorageService.storeForces();

  // }
  onFetchData() {
    this.dataStorageService.fetchForces();
  }

  ngOnInit() {
  }
  collapsed = true
}