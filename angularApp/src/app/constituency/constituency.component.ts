import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ConstituencyService } from '../constituency.service'

import { Constituency, Result } from '../data.models'

@Component({
  selector: 'app-region',
  templateUrl: './constituency.component.html',
  styleUrls: ['./constituency.component.css']
})
export class ConstituencyComponent implements OnChanges {
    results: Result[];

  @Input('constituencies') constituencies;
  @Input('federalState_name') federalState_name: string;

  constructor(private constituencyService: ConstituencyService) {}

  private constituencyName: string;

  ngOnChanges() {
      this.results = null;

  }

  getResult(constituency: Constituency) {
    this.constituencyName = constituency.name;

    this.constituencyService.fetchResults(constituency.id).subscribe(results => {
        this.results = results.data;
        this.calculateInPercent(this.results);
        console.log("results " , this.results);
        }, err => {console.log(err)});
}

calculateInPercent(results) {
  var first_total = results[0].firstVoteTotal;
  var second_total = results[0].secondVoteTotal;

  //first_total = 100 %
  //first_votes =

  for(var result in results){


    var firstVotePercent = (Math.round( (results[result].firstVote * 100 / first_total)* 100)/100).toFixed(2);



    var secondVotePercent = (Math.round( (results[result].secondVote * 100 / second_total)* 100)/100).toFixed(2);

    results[result]["firstVotePercent"] = firstVotePercent;
    results[result]["secondVotePercent"] = secondVotePercent;
  }

  console.log(results);
}

}
