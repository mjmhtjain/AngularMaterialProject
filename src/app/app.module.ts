import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { ShoppingDashComponent } from './shopping-dash/shopping-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    ShoppingDashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
