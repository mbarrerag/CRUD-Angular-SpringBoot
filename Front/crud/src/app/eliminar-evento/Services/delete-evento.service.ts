import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteEventoService {

  constructor(private http: HttpClient) { }

  deleteEvento(idEvento: string): any {
    const url = `http://localhost:8180/api/eliminarevento/${idEvento}`;
    return this.http.delete(url);
  }
}
