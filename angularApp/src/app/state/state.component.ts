import { Component, OnInit } from '@angular/core';
import { Federal_Territory, Constituency } from "../data.models";
import { RegionComponent} from "../region/region.component";
import {StateService} from "../state.service";
import {RegionService} from "../region.service";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  federalTerritory: Federal_Territory[];
  constituencies: Constituency[];
  stateName: string;

  constructor(private stateServ: StateService, private regionServ: RegionService) { }

  ngOnInit() {
    this.stateServ.fetchFederalTerritory().subscribe(results => this.federalTerritory = results);
  }

  getStatesRegions(state: FederalState){
    this.regionServ.getConstit(state.id).then(results => this.constituencies = results);
    this.stateName = state.name;
  }

}
