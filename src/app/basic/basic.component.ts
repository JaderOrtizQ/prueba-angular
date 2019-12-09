import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BasicService} from './basic.service';
import { Departamento } from './departamento.model';

@Component({
	selector: 'app-departamentos',
    templateUrl: './basic.component.html',
    styles:['.table-sm th{padding: 0.3rem;}, .table-sm td{padding: 0.3rem;}']
})
export class BasicComponent implements OnInit {

  departamentos$: Departamento[];
  constructor(private basicService: BasicService){}

  ngOnInit(){
  	return this.basicService.getDepartamentos()
  	 .subscribe(data => this.departamentos$ = data);
  }

  

  // TODO: Completar codigo para llamar al servicio al mostrar el componente
}