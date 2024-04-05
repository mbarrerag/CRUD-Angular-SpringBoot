import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPersonaService {
  private url = 'http://localhost:8180/api/personas';

  constructor(private http: HttpClient) { }

  getPersona(idDocumento: string): Observable<any> {
    const id_documento = parseInt(idDocumento);
    const queryUrl = `${this.url}/${id_documento}`;

    const persona = this.http.get(queryUrl);
    return persona;
  }
}
