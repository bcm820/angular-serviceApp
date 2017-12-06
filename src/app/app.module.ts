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

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    NumbersComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
