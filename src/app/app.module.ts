import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicModule} from './basic/basic.module';
import {IntermediateModule} from './intermediate/intermediate.module';

import {HttpClientModule } from '@angular/common/http';


@NgModule( {
             declarations: [
               AppComponent
             ],
             imports: [
               BrowserModule,
               AppRoutingModule,
               BasicModule,
               IntermediateModule,
               HttpClientModule
             ],
             providers: [],
             bootstrap: [AppComponent]
           } )
export class AppModule {
}
