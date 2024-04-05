import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarVehiculoService {

  constructor(private http: HttpClient) { }

  postVehiculo(data: any): Observable<any> {
    const url = `http://localhost:8180/api/crearvehiculo/${data.idDocumento}`;
    return this.http.post(url, data);
  }
}
