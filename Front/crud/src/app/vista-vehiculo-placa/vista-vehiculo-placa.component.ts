import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { GetVehiculoPlacaService } from './Services/get-vehiculo-placa.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-vehiculo-placa',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-vehiculo-placa.component.html',
  styleUrl: './vista-vehiculo-placa.component.css'
})
export class VistaVehiculoPlacaComponent {
  idVehiculo: string = '';
  vehiculo: any;

  constructor(private getVehiculoPlacaService: GetVehiculoPlacaService) { }

  buscarVehiculo(): void {
    this.getVehiculoPlacaService.getVehiculo(this.idVehiculo).subscribe(
      (data: any) => {
        this.vehiculo = data;
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        )
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        )
      }
    )
  }
}
