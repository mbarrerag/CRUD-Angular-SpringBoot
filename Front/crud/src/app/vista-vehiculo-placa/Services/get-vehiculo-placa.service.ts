import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiculoPlacaService {
  private url: string  = 'http://localhost:8180/api/vehiculosplaca';

  constructor(private http: HttpClient) { }

  getVehiculo(placa: string): Observable<any> {
    const id_vehiculo = placa;
    const queryUrl  = `${this.url}/${id_vehiculo}`;

    const vehiculo = this.http.get(queryUrl);
    return vehiculo;
  }
}
