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

  public doughnutChartPartyLabels:string[] = [];
  public doughnutChartFirstVote:number[] = [];
  public doughnutChartSecondVote:number[] = [];

  public doughnutChartType:string = 'doughnut';



  constructor() {


   }

  ngOnChanges() {

    this.resetResult();
    for(var result in this.results){

      this.doughnutChartPartyLabels.push(this.results[result].partyName);
      this.doughnutChartFirstVote.push(this.results[result].firstVote)
      this.doughnutChartSecondVote.push(this.results[result].secondVote)


    }
    console.log("this.results ", this.results);
  }


  resetResult() {
    this.doughnutChartFirstVote = [];
    this.doughnutChartSecondVote = [];
    this.doughnutChartPartyLabels = [];
}

}
