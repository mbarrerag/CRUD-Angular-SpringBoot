import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEventoService {
  private url = 'http://localhost:8180/api/eventos';

  constructor(private http: HttpClient) { }

  getEvento(idEvento: string): any {
    const queryUrl = `${this.url}/${idEvento}`;

    const evento = this.http.get(queryUrl);
    return evento;
  }
}
