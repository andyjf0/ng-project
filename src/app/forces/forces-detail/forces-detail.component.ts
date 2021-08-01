import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from "rxjs";
import { Subject } from 'rxjs';


import { ForceDetail } from '../force-detail.model';
import { Force } from '../force.model';

import { Senior } from '../senior.model';
import { SeniorService } from '../senior.service';
import { ForceService } from '../force.service';

import { ForceDetailService } from '../force-detail.service';
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
  // forcedetails: ForceDetail;
  // @Input() forcedetails: ForceDetail;
  id: number;
  loadedForceDetails: ForceDetail[] = [];
  otherLoadedForceDetails: ForceDetail[] = [];
  loadedSeniors: Senior[] = [];

  constructor(private forceService: ForceService,
    private forceDetailService: ForceDetailService,
    private dataStorageService: DataStorageService,
    private seniorService: SeniorService,
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
    // console.log(this.force.id);

    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.forcedetails = this.forceDetailService.getForceDetail(this.force.id);
    //   }
    // );
    // console.log(this.forcedetails.url);
  }

  // onGetSenior() {
  //   // this.router.navigate(['senior'], {relativeTo: this.route});
  //   this.router.navigate(['../', this.id, 'senior'], {relativeTo: this.route});
  // }
  // onFetchData() {
  //   this.dataStorageService.fetchForceDetail();
  // }

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
}

onFetchSeniors() {
  this.fetchSeniors();
  // this.loadedSeniors.forEach(seniors => console.log(seniors.name));
  // this.loadedSeniors.forEach(seniors => console.log(seniors.rank));
  // return this.loadedSeniors.forEach(seniors => (seniors.name));

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
      console.log('seniors found:', seniors);
      this.seniorService.setSeniors(seniors);
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
}

// private seniors: Senior[] = [];

// setSeniors(seniors: Senior[]) {
//   this.loadedSeniors = seniors;
//   this.seniorsChanged.next(this.loadedSeniors.slice());
// }

getSeniors() {
  return this.loadedSeniors.slice();
}

getSenior(index: number) {
  return this.loadedSeniors[index];

}

}
