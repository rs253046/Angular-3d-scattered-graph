import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScatteredGraphComponent } from './common/scattered-graph/scattered-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    ScatteredGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
