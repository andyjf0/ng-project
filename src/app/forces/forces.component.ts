import { Component, OnInit } from '@angular/core';

import { Force } from './force.model';
import { ForceService } from './force.service';

@Component({
  selector: 'app-forces',
  templateUrl: './forces.component.html',
  styleUrls: ['./forces.component.css'],
  // providers: [ForceService]
})
export class ForcesComponent implements OnInit {
  selectedForce: Force;

  constructor(private forceService: ForceService) { }

  ngOnInit() {
    this.forceService.forceSelected
    .subscribe(
      (force: Force) => {
        this.selectedForce = force;
      }
    );
  }

}
