import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {FederalState } from "./data.models";
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url: string = "/api/states"

  constructor(private http: HttpClient) { }

  getAllStates(): Promise<FederalState[]> {
    return this.http.get(this.url, { headers: new HttpHeaders(
            {'Content-Type':'application/json'}
        )}).toPromise().then(response => response.json().data).catch((error) => console.log('no States: ',error));
  }

  private header() {
    return new Headers(
        {'Content-Type':'application/json'}
    )
  }
}
