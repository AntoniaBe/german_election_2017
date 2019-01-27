import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './constituency.component.html',
  styleUrls: ['./constituency.component.css']
})
export class ConstituencyComponent implements OnInit {

  @Input('constituencies') constituencies;
  @Input('federalState_name') federalState_name: string;

  constructor() { }

  ngOnInit() {
  }

}
