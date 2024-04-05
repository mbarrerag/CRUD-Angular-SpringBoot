import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarVehiculoService } from './Services/registrar-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-vehiculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-vehiculo.component.html',
  styleUrl: './registro-vehiculo.component.css'
})
export class RegistroVehiculoComponent {
  placa: string = '';
  tipoVehiculo: string = '';
  documentoPropietario: string = '';

  constructor(private registrarVehiculoService: RegistrarVehiculoService) { }

  postVehiculo(): void {
    const datos = {
      "placa": this.placa,
      "tipoVehiculo": this.tipoVehiculo,
      "idDocumento": this.documentoPropietario
    }
    
    this.registrarVehiculoService.postVehiculo(datos).subscribe(
      () => {
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
    );
  }
}
