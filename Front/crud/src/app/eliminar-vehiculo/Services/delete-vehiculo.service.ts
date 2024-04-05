import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteVehiculoService {

  constructor(private http: HttpClient) { }

  deleteVehiculo(idVehiculo: string): any {
    const url = `http://localhost:8180/api/eliminarvehiculo/${idVehiculo}`;
    return this.http.delete(url);
  }
}
