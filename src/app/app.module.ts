import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    NumbersComponent,
    GammaComponent,
    NinjaGoldComponent,
    PlaceComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  providers: [
    DataService,
    GoldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
