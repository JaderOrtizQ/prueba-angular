import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponent} from './basic.component';
import {basicRouting} from './basic.routes';
import { HttpClientModule} from '@angular/common/http';



@NgModule( {
             imports: [
	             CommonModule, 
	             basicRouting,
	             BrowserModule,
	             HttpClientModule
             ],
             declarations: [
             	BasicComponent
             ]

           } )
export class BasicModule {

}
