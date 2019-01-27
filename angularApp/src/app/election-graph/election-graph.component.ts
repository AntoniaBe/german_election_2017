import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'
import { Result } from '../data.models'

@Component({
  selector: 'app-election-graph',
  templateUrl: './election-graph.component.html',
  styleUrls: ['./election-graph.component.css']
})
export class ElectionGraphComponent implements OnChanges {

 @Input('results') results: Result[];

  public doughnutFirstPartyLabels:string[] = [];
  public doughnutSecondPartyLabels:string[] = [];
  public doughnutChartFirstVote:number[] = [];
  public doughnutChartSecondVote:number[] = [];

  public doughnutChartType:string = 'doughnut';



  constructor() {


   }

  ngOnChanges() {

    this.resetResult();
    for(var result in this.results){

        if(this.results[result].firstVote > 1.0){
            this.doughnutFirstPartyLabels.push(this.results[result].partyName);
            this.doughnutChartFirstVote.push(this.results[result].firstVote)
        }
        if(this.results[result].secondVote){
            this.doughnutChartSecondVote.push(this.results[result].secondVote)
            this.doughnutSecondPartyLabels.push(this.results[result].partyName);
        }


    }
    console.log("this.results ", this.results);
  }


  resetResult() {
    this.doughnutChartFirstVote = [];
    this.doughnutChartSecondVote = [];
    this.doughnutFirstPartyLabels = [];
    this.doughnutSecondPartyLabels = [];
}

}
