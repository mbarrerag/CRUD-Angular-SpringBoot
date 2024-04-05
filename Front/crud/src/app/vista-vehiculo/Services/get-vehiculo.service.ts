import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiculoService {
  private url: string  = 'http://localhost:8180/api/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculo(idVehiculo: string): Observable<any> {
    const id_vehiculo = parseInt(idVehiculo)
    const queryUrl  = `${this.url}/${id_vehiculo}`;

    const vehiculo = this.http.get(queryUrl);
    return vehiculo;
  }
}
