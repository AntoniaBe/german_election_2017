import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Constituency, Result } from './data.models'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {

  private federal_states_url: string = "http://localhost:5000/api/federal_states"
  private constituency_url: string = 'http://localhost:5000/api/constituency'

  constructor(private http: HttpClient) { }

  fetchConstituencies(federalStateId: number): Observable<any> {

      let url: string = `${this.federal_states_url}/${federalStateId}/constituencies`

    return this.http.get(url, {headers: {'Content-Type': 'application/json'}})
  }


  fetchResults(constituencyId: number): Observable<Result[]> {
    let url: string = `${this.constituency_url}/${constituencyId}/results`
    return this.http.get<Result[]>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(console.log('results doesnt exist: ', err));
      })
    )
  }
}
