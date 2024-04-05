import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeleteVehiculoService } from './Services/delete-vehiculo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-vehiculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrl: './eliminar-vehiculo.component.css'
})
export class EliminarVehiculoComponent {
  idVehiculo: string = '';

  constructor(private deleteVehiculoService: DeleteVehiculoService,
    private router: Router) { }


  confirmar(): void {
    this.deleteVehiculoService.deleteVehiculo(this.idVehiculo).subscribe(
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
    )
  }
}
