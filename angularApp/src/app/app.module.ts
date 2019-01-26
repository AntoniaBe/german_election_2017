import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FederalStateComponent } from './federalState/federalState.component';
import { ConstituencyComponent } from './constituency/constituency.component';
import { ElectionListComponent } from './election-list/election-list.component';
import { ElectionGraphComponent } from './election-graph/election-graph.component';

import {ConstituencyService} from "./constituency.service";
import {FederalStateService} from "./federalState.service";


@NgModule({
  declarations: [
    AppComponent,
    FederalStateComponent,
    ConstituencyComponent,
    ElectionListComponent,
    ElectionGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule

  ],
  providers: [ConstituencyService, FederalStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
