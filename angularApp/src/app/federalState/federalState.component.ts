import { Component, OnInit } from '@angular/core';
import { Federal_State, Constituency } from "../data.models";
import {FederalStateService} from "../federalState.service";
import {ConstituencyService} from "../constituency.service";

@Component({
  selector: 'federal-States',
  templateUrl: './federalState.component.html',
  styleUrls: ['./federalState.component.css']
})
export class FederalStateComponent implements OnInit {
  federalStates: Federal_State[];
  constituencies: Constituency[];
  federalStateName : string;

  constructor(private federalStateServ: FederalStateService, private constituencyServ: ConstituencyService) { }

  ngOnInit() {
    this.federalStateServ.fetchFederalStates().subscribe(results => this.federalStates = results);
  }

  getConstituencies(federal_state: Federal_State){
    this.constituencyServ.fetchConstituencies(federal_state.id).subscribe(results => this.constituencies = results);
    this.federalStateName = federal_state.name;
  }

}
