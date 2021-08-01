import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Subject } from 'rxjs';


import { ForceDetail } from '../force-detail.model';
import { Force } from '../force.model';

import { Senior } from '../senior.model';
import { ForceService } from '../force.service';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forces-detail',
  templateUrl: './forces-detail.component.html',
  styleUrls: ['./forces-detail.component.css']
})

@Injectable()
export class ForcesDetailComponent implements OnInit {
  seniorsChanged = new Subject<Senior[]>();
  force: Force;
  id: number;
  loadedForceDetails: ForceDetail[] = [];
  otherLoadedForceDetails: ForceDetail[] = [];
  loadedSeniors: Senior[] = [];
  public show:boolean = false;
  public show2:boolean = false;

  constructor(private forceService: ForceService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
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
  this.show = true;
}

  fetchSeniors(){
    this.http
    .get<Senior[]>('https://data.police.uk/api/forces/' + this.force.id + '/people')
    .pipe(
      map(responseData => {
      const seniorArray: Senior[] = [];
      for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        seniorArray.push({ ...responseData[key] });
      }}
      return seniorArray;
    })
    )
    .subscribe(seniors => {
      // console.log('seniors found:', seniors);
      this.loadedSeniors = seniors;
      this.loadedSeniors = this.getSeniors();
      // this.router.navigate(['../', this.id, 'senior'], {relativeTo: this.route});
  });
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
    this.otherLoadedForceDetails = forcedetails;
  });
  this.show2 = true;
}

getSeniors() {
  return this.loadedSeniors.slice();
}

// getSenior(index: number) {
//   return this.loadedSeniors[index];
// }

}
