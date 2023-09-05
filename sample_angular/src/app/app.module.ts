import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Friend1Component } from './Friend1.component';
import { Friend2Component } from './Friend2.component';

@NgModule({
  declarations: [
    AppComponent,Friend1Component,Friend2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
