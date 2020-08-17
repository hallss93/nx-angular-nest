import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompComponent } from './../comp/comp.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CompComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
