import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Federal_State } from "./data.models";
import { catchError } from 'rxjs/operators';
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FederalStateService {
  private federal_state_url: string = "http://localhost:5000/api/federal_states"

  constructor(private http: HttpClient) { }

  fetchFederalStates(): Observable<any> {
    return this.http.get(this.federal_state_url, {headers: {'Content-Type': 'application/json'}})
  }
}
