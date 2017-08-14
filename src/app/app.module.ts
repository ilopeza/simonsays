import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimonComponent } from './simon/simon.component';
import { SimonUnitComponent } from './simon-unit/simon-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    SimonComponent,
    SimonUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
