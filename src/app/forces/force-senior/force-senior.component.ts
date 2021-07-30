import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Senior } from '../senior.model';
// import { SeniorService } from '../senior.service';
import { DataStorageService } from '../../shared/data-storage.service';

import { ForcesDetailComponent } from '../forces-detail/forces-detail.component';

@Component({
  selector: 'app-force-senior',
  templateUrl: './force-senior.component.html',
  styleUrls: ['./force-senior.component.css']
})
export class ForceSeniorComponent implements OnInit {
  @Input() seniors: Senior[];
  loadedSeniors: Senior[] = [];


  constructor(
    // private seniorService: SeniorService,
    private dataStorageService: DataStorageService,
    private forcesDetailComponent: ForcesDetailComponent,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      // this.forcesDetailComponent.seniorsChanged
      // .subscribe(
      //   (seniors: Senior[]) => {
      //     this.seniors = seniors;
      //   }
      // );
      // this.seniors = this.forcesDetailComponent.getSeniors();
      // this.dataStorageService.fetchForces();
      console.log('senior component', this.loadedSeniors)
      console.log('senior component', this.seniors)
    }



    // onFetchSeniors() {
    //   this.dataStorageService.fetchSeniors();
    // }


  // ngOnInit(): void {
  //   this.route.params
  //   .subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //     }
  //   )
  // }

}
