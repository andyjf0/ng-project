import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Senior } from './senior.model';

@Injectable()
export class SeniorService {
  seniorSelected = new EventEmitter<Senior>();
  seniorsChanged = new Subject<Senior[]>();


  private seniors: Senior[] = [];

  setSeniors(seniors: Senior[]) {
    this.seniors = seniors;
    this.seniorsChanged.next(this.seniors.slice());
  }

  getSeniors() {
    return this.seniors.slice();
  }

  getSenior(index: number) {
    return this.seniors[index];
  }
}
