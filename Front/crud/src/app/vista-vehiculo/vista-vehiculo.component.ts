import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { GetVehiculoService } from './Services/get-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-vehiculo',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-vehiculo.component.html',
  styleUrl: './vista-vehiculo.component.css'
})
export class VistaVehiculoComponent {
  idVehiculo: string = '';
  @Input() vehiculo: any;

  constructor(private getVehiculoService: GetVehiculoService) { }

  buscarVehiculo(): void {
    this.getVehiculoService.getVehiculo(this.idVehiculo).subscribe(
      (data) => {
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
