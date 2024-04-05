import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateVehiculoService } from './Services/update-vehiculo.service';
import { GetVehiculoService } from '../vista-vehiculo/Services/get-vehiculo.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-vehiculo',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrl: './actualizar-vehiculo.component.css'
})
export class ActualizarVehiculoComponent {
  idVehiculo: string = '';
  placa: string = '';
  tipoVehiculo: string = '';
  documentoPropietario: string = '';

  constructor(private updateVehiculoService: UpdateVehiculoService,
    private getVehiculoService: GetVehiculoService,
    private router: Router) { }

  buscarVehiculo(): void {
    this.getVehiculoService.getVehiculo(this.idVehiculo).subscribe(
      (data) => {
        this.placa = data.placa;
        this.tipoVehiculo = data.tipoVehiculo;
        this.documentoPropietario = data.propietario.idDocumento;
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        );
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        );
      }
    )
  }

  updateVehiculo(): void {
    const data = {
      "idVehiculo": this.idVehiculo,
      "placa": this.placa,
      "tipoVehiculo": this.tipoVehiculo,
      "idPropietario": this.documentoPropietario
    }

    this.updateVehiculoService.putVehiculo(data).subscribe(
      () => {
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        );
        this.router.navigate(['/home']);
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        );
      }
    );
  }
}
