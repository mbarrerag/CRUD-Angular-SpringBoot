import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateViviendaService {

  constructor(private http: HttpClient) { }

  putVivienda(data: any): any {
    const url = `http://localhost:8180/api/viviendas/${data.idVivienda}/${data.idMunicipio}/${data.idPropietario}`;
    return this.http.put(url, data);
  }
}
