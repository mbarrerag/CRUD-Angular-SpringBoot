import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-vehiculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrl: './actualizar-vehiculo.component.css'
})
export class ActualizarVehiculoComponent {
  placa: string = '';
  tipoVehiculo: string = '';
  documentoPropietario: string = '';

  updateVehiculo(): void {
    
  }
}
