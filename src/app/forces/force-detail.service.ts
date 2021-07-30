import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ForceDetail } from './force-detail.model';

@Injectable()
export class ForceDetailService {
  forceSelected = new EventEmitter<ForceDetail>();
  forceDetailsChanged = new Subject<ForceDetail[]>();


  private forcedetails: ForceDetail[] = [
    // new ForceDetail('a test force', 'test', 'https://www.bing.com/', 123456, 'blah blah blah')
  ];

  setForceDetails(forcedetails: ForceDetail[]) {
    this.forcedetails = forcedetails;
    this.forceDetailsChanged.next(this.forcedetails.slice());
  }

  getForceDetails() {
    return this.forcedetails.slice();
  }

  getForceDetail(id: string) {
    return this.forcedetails[id];
  }
}
