import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NumbersComponent } from './numbers/numbers.component';
import { AlphaComponent } from './numbers/alpha/alpha.component';
import { BetaComponent } from './numbers/beta/beta.component';
import { DataService } from './numbers/data.service';
import { GammaComponent } from './numbers/gamma/gamma.component';
import { NinjaGoldComponent } from './ninja-gold/ninja-gold.component';
import { GoldService } from './ninja-gold/gold.service';
import { PlaceComponent } from './ninja-gold/place/place.component';
import { MessagesComponent } from './ninja-gold/messages/messages.component';
import { HttpAppComponent } from './http-app/http-app.component';
import { TaskService } from './http-app/task.service';
import { FirstComponent } from './http-app/first/first.component';

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
    FirstComponent
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
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
