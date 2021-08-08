import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators'
import { Subject } from 'rxjs';


import { ForceDetail } from '../force-detail.model';
import { Force } from '../force.model';

import { Senior } from '../senior.model';
import { ForceService } from '../force.service';

import { Search } from '../search.model';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forces-detail',
  templateUrl: './forces-detail.component.html',
  styleUrls: ['./forces-detail.component.css']
})

@Injectable()
export class ForcesDetailComponent implements OnInit {
  seniorsChanged = new Subject<Senior[]>();
  searchChanged = new Subject<Search[]>();
  force: Force;
  id: number;
  loadedForceDetails: ForceDetail[] = [];
  loadedSeniors: Senior[] = [];
  loadedSearch: Search[] = [];
  public showDetail:boolean = false;
  public showSeniors:boolean = false;
  public showSearch:boolean = false;

  constructor(private forceService: ForceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    ) { };


  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.force = this.forceService.getForce(this.id);
      }
    );
    }

  fetchForceDetail(){
    this.http
    .get<{ [key: string]: ForceDetail }>(
      'https://data.police.uk/api/forces/' + this.force.id
      )
    .pipe(
      map(responseData => {
      const detailArray: ForceDetail[] = [];
      for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        detailArray.push(responseData[key]);
      }}
      return detailArray;
    })
    )
    .subscribe(forcedetails => {
      this.loadedForceDetails = forcedetails;
  });
  this.showSeniors = false;
  this.showDetail = true;
  this.showSearch = false;
}

  fetchSeniors(){
    this.http
    .get<Senior[]>('https://data.police.uk/api/forces/' + this.force.id + '/people')
    .pipe(
      map(responseData => {
      const seniorArray: Senior[] = [];
      for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        seniorArray.push(responseData[key]);
      }}
      return seniorArray;
    })
    )
    .subscribe(seniors => {
      this.loadedSeniors = seniors;
  });
  this.fetchForceDetail();
  this.showDetail = false;
  this.showSeniors = true;
  this.showSearch = false;
}

fetchSearch() {
  this.http
  .get<Search[]>('https://data.police.uk/api/stops-force?force=' + this.force.id)
  .pipe(
    map(responseData => {
    const searchArray: Search[] = [];
    for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
      searchArray.push(responseData[key]);
    }}
    return searchArray;
  })
  )
  .subscribe(searchs => {
    this.loadedSearch = searchs;
});
  this.fetchForceDetail();
  this.showDetail = false;
  this.showSeniors = false;
  this.showSearch = true;
}

}
