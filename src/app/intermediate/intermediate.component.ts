import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IntermediateService} from './intermediate.service';
import { Empleado } from './empleado.model';

@Component( {
              templateUrl: './intermediate.component.html'
            } )
export class IntermediateComponent implements OnInit {

  empleados$: Empleado[];
  constructor(private intermediateService: IntermediateService){}

  ngOnInit(){
  	return this.intermediateService.getRemoteData()
  	 .subscribe(data => this.empleados$ = data);
  }

}
