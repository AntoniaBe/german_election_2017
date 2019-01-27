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
  federalStates;
  constituencies: Constituency[];
  federalStateName : string;

  constructor(private federalStateServ: FederalStateService, private constituencyServ: ConstituencyService) { }

  ngOnInit() {
    this.getStates();
  }
  getStates(){
      this.federalStateServ.fetchFederalStates().subscribe(results => {
          this.federalStates = results.data;
          console.log(this.federalStates);
          }, err => {console.log(err)});
  }

  getConstituencies(federal_state: Federal_State){
    console.log("fetching");
    this.constituencyServ.fetchConstituencies(federal_state.id).subscribe(results => this.constituencies = results.data);
    this.federalStateName = federal_state.name;
    console.log("fetched");
  }

}
