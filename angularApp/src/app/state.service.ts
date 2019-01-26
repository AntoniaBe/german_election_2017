import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Federal_Territory } from "./data.models";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private federal_territory_url: string = "/api/federal_territory"

  constructor(private http: HttpClient) { }

  fetchFederalTerritory(): Observable<Federal_Territory[]> {
    return this.http.get<Federal_Territory[]>(this.federal_territory_url).pipe(

      catchError((err: HttpErrorResponse) => {
        return Observable.throw(console.log('federal territory doesnt exist: ', err));
      })
    )
  }
}
