import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from './views/views.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [
    BootstrapComponent,
  ],
  imports: [
    ViewsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
