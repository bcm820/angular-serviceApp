import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NumbersComponent } from './numbers/numbers.component';
import { AlphaComponent } from './numbers/alpha/alpha.component';
import { BetaComponent } from './numbers/beta/beta.component';
import { GammaComponent } from './numbers/gamma/gamma.component';
import { DataService } from './numbers/data.service';

import { NinjaGoldComponent } from './ninja-gold/ninja-gold.component';
import { PlaceComponent } from './ninja-gold/place/place.component';
import { MessagesComponent } from './ninja-gold/messages/messages.component';
import { GoldService } from './ninja-gold/gold.service';

import { HttpAppComponent } from './http-app/http-app.component';
import { FirstComponent } from './http-app/first/first.component';
import { TaskService } from './http-app/task.service';

import { GithubScoreComponent } from './github-score/github-score.component';
import { GithubService } from './github-score/github.service';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    NumbersComponent,
    GammaComponent,
    NinjaGoldComponent,
    PlaceComponent,
    MessagesComponent,
    HttpAppComponent,
    FirstComponent,
    GithubScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    GoldService,
    TaskService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
