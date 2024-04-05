import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletePersonaService {

  constructor(private http: HttpClient) { }

  deletePersona(idDocumento: string): any {
    const url = `http://localhost:8180/api/eliminarpersona/${idDocumento}`;
    return this.http.delete(url);
  }
}
