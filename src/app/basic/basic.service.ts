import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from './departamento.model';

@Injectable({
	providedIn: 'root'
})
export class BasicService {
	apiUrl= 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

	constructor(private _http:HttpClient) { }

	getDepartamentos() {
		return this._http.get<Departamento[]>(this.apiUrl)
	}
}
