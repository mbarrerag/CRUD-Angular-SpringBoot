import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateVehiculoService {

  constructor(private http: HttpClient) { }

  putVehiculo(data: any): any {
    const url = `http://localhost:8180/api/vehiculos/${data.idVehiculo}/${data.idPropietario}`;
    return this.http.put(url, data);
  }
}
