import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntermediateComponent} from './intermediate.component';
import {intermediateRouting} from './intermediate.routes';
import {HttpClientModule} from '@angular/common/http';

@NgModule( {
             imports: [
             	CommonModule, 
             	HttpClientModule, 
             	BrowserModule,
             	intermediateRouting
             	],
             declarations: [
             IntermediateComponent
             ]
             
           } )
export class IntermediateModule {

}
