import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllPersonasService {

  private apiUrl = 'http://localhost:8180/api/personas'; 

  constructor(private http: HttpClient) { }

  obtenerDatosPaginados(pageNumber: number, pageSize: number): Observable<any> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());

    return this.http.get(this.apiUrl, { params: params });
  }
}
