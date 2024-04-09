import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateAlcaldeService {
  constructor(private http: HttpClient) { }

  putMunicipio(alcalde: string, data: any): any {
    const url = `http://localhost:8180/api/municipios/${data.idMunicipio}/${alcalde}`;
    return this.http.put(url, data);
  }


  getMunicipio(idMunicipio: string): any {
    const url = `http://localhost:8180/api/municipios/${idMunicipio}`;
    return this.http.get(url);
  }

}
