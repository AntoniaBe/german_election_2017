import { Component, Input } from '@angular/core';

import { Result } from '../data.models'

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class ElectionListComponent{

  constructor() { }

 @Input('electionList') electionList: Result[];



}
