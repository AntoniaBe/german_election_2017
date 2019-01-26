import { Component, OnInit } from '@angular/core';
import { FederalState, Constituency } from "../data.models";
import { RegionComponent} from "../region/region.component";
import {StateService} from "../state.service";
import {RegionService} from "../region.service";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  states: FederalState[];
  constituencies: Constituency[];
  stateName: string;

  constructor(private stateServ: StateService, private regionServ: RegionService) { }

  ngOnInit() {
    this.stateServ.getAllStates().then(results => this.states = results);
  }

  getStatesRegions(state: FederalState){
    this.regionServ.getConstit(state.id).then(results => this.constituencies = results);
    this.stateName = state.name;
  }

}
