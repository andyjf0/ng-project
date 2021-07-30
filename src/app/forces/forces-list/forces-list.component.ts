import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Force } from '../force.model';
import { ForceService } from '../force.service';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-forces-list',
  templateUrl: './forces-list.component.html',
  styleUrls: ['./forces-list.component.css']
})
export class ForcesListComponent implements OnInit {
  forces: Force[];

  constructor(private forceService: ForceService,
              private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.forceService.forcesChanged
    .subscribe(
      (forces: Force[]) => {
        this.forces = forces;
      }
    );
    this.forces = this.forceService.getForces();
    // this.dataStorageService.fetchForces();
  }

  onFetchData() {
    this.dataStorageService.fetchForces();
  }
}
