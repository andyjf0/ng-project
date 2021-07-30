import { Component, OnInit, Input } from '@angular/core';

import { Senior } from '../../senior.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-senior-item',
  templateUrl: './senior-item.component.html',
  styleUrls: ['./senior-item.component.css']
})
export class SeniorItemComponent implements OnInit {
  @Input() senior: Senior;
  @Input() index: number;


  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(): void {
  }

}
