import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Force } from './force.model';

@Injectable()
export class ForceService {
  forceSelected = new EventEmitter<Force>();
  forcesChanged = new Subject<Force[]>();

  private forces: Force[] = [];

  setForces(forces: Force[]) {
    this.forces = forces;
    this.forcesChanged.next(this.forces.slice());
  }

  getForces() {
    return this.forces.slice();
  }

  getForce(index: number) {
    return this.forces[index];
  }
}
