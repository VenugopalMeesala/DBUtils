import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectDbutilsComponent } from './select-dbutils/select-dbutils.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDbutilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
