import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarEventoService {

  constructor(private http: HttpClient) { }

  postEvento(data: any): Observable<any> {
    const url = `http://localhost:8180/api/crearevento/${data.lugar}`;
    return this.http.post(url, data);
  }
}
