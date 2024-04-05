import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteViviendaService {

  constructor(private http: HttpClient) { }

  deleteVivienda(idVivienda: string): any {
    const url = `http://localhost:8180/api/eliminarvivienda/${idVivienda}`;
    return this.http.delete(url);
  }
}
