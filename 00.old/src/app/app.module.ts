import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { RollselectComponent } from './rollselect/rollselect.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { D3jsComponent } from './d3js/d3js.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    RollselectComponent,
    DataentryComponent,
    D3jsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
