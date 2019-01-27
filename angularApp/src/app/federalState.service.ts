import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Federal_State } from "./data.models";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FederalStateService {
  private federal_state_url: string = "/api/federal_states"

  constructor(private http: HttpClient) { }

  fetchFederalStates(): Observable<Federal_State[]> {
    console.log("fetching");
    return this.http.get<Federal_State[]>(this.federal_state_url).pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(console.log('federal state doesnt exist: ', err));
      })
    )
  }
}
