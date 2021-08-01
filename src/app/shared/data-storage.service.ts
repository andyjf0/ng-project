import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Force } from '../forces/force.model';

import { ForceService } from '../forces/force.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  loadedForces: Force[] = [];
  constructor(
    private http: HttpClient,
    private forceService: ForceService,
    ) {}

  storeForces() {
    const forces = this.forceService.getForces();
    return this.http.get('https://data.police.uk/api/forces')
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchForces(){
    this.http
    .get<Force[]>('https://data.police.uk/api/forces')
    .subscribe(forces => {
      this.forceService.setForces(forces);
  });
}

}
