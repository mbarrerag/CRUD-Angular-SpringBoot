import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-vehiculo',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-vehiculo.component.html',
  styleUrl: './vista-vehiculo.component.css'
})
export class VistaVehiculoComponent {
  placa: string = '';
  vehiculo: any;

  buscarVehiculo(): void {

  }
}
