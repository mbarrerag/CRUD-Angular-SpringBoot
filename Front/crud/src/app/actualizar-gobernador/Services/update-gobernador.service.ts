import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateGobernadorService {
  constructor(private http: HttpClient) { }
  
  putDepartamento(alcalde: string, data: any): any {
    const url = `http://localhost:8180/api/departamentos/${data.idDepartamento}/${alcalde}`;
    return this.http.put(url, data);
  }


  getDepartamento(idDepartamento: string): any {
    const url = `http://localhost:8180/api/departamentos/${idDepartamento}`;
    return this.http.get(url);
  }
}
