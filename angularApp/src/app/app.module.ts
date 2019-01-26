import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { RegionComponent } from './region/region.component';
import { ElectionListComponent } from './election-list/election-list.component';
import { ElectionGraphComponent } from './election-graph/election-graph.component';

import {RegionService} from "./region.service";
import {StateService} from "./state.service";


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    RegionComponent,
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
  providers: [RegionService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
