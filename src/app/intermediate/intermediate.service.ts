import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado} from './empleado.model';

@Injectable({
	providedIn: 'root'
})

export class IntermediateService {

  apirUrl= 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private _http:HttpClient) {
  }
  
  getRemoteData() {
    return this._http.get<Empleado[]>(this.apirUrl)
  }

  saveRemoteData() {
    // TODO: REEMPLAZAR CON LA LLAMADA REAL AL API REMOTA
  }
}
