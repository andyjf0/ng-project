import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Force } from '../forces/force.model';
import { ForceDetail } from '../forces/force-detail.model';
import { Senior } from '../forces/senior.model';

import { ForceService } from '../forces/force.service';
import { ForceDetailService } from '../forces/force-detail.service';
// import { SeniorService } from '../forces/senior.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  loadedForces: Force[] = [];
  constructor(
    private http: HttpClient,
    private forceService: ForceService,
    private forceDetailService: ForceDetailService,
    // private seniorService: SeniorService
    ) {}

  // storeForces() {
  //   const forces = this.forceService.getForces();
  //   return this.http.get('https://data.police.uk/api/forces')
  //   .subscribe(response => {
  //     console.log(response);
  //   });
  // }

  fetchForces(){
    this.http
    .get<Force[]>('https://data.police.uk/api/forces')
    // .pipe(map(responseData => {
    //   const forcesArray: Force[] = [];
    //   for (const key in responseData) {
    //     if (responseData.hasOwnProperty(key)) {
    //     forcesArray.push({ ...responseData[key]})
    //   }
    // }
    // return forcesArray;
    // }))
    .subscribe(forces => {
      // console.log(forces);
      this.forceService.setForces(forces);
  });
}

// fetchForceDetail(){
//   this.http
//   .get<ForceDetail[]>('https://data.police.uk/api/forces/' +'cleveland')
//   // .pipe(map(forcedetails => {
//   //   return forcedetails.map( forcedetail => {
//   //     return {...forcedetail, description: forcedetail.description ? forcedetail.description : 'N/A'}
//   //   });
//   // }))
//   .subscribe(forcedetails => {
//     console.log(forcedetails);
//     this.forceDetailService.setForceDetails(forcedetails);
// });
// }

// fetchSeniors(){
//   this.http
//   .get<Senior[]>('https://data.police.uk/api/forces/' + this.force.id + '/people')
//   // .pipe(map(responseData => {
//   //   const forcesArray: Force[] = [];
//   //   for (const key in responseData) {
//   //     if (responseData.hasOwnProperty(key)) {
//   //     forcesArray.push({ ...responseData[key]})
//   //   }
//   // }
//   // return forcesArray;
//   // }))
//   .subscribe(seniors => {
//     // console.log(seniors);
//     this.seniorService.setSeniors(seniors);
// });
// }

// fetchSenior(){
//   this.http
//   .get<Senior[]>('https://data.police.uk/api/forces/' + this.force.id + '/people')
//   // .pipe(map(forcedetails => {
//   //   return forcedetails.map( forcedetail => {
//   //     return {...forcedetail, description: forcedetail.description ? forcedetail.description : 'N/A'}
//   //   });
//   // }))
//   .subscribe(seniors => {
//     console.log(seniors);
//     this.seniorService.setSeniors(seniors);
//     this.router.navigate(['../', this.id, 'senior'], {relativeTo: this.route});
// });}
}
