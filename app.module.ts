import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureWarningComponent } from './temperature-warning/temperature-warning.component';

@NgModule({
 declarations: [
   AppComponent,
   TemperatureComponent,
   TemperatureWarningComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }