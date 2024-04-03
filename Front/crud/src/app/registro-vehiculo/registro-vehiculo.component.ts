import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
}
