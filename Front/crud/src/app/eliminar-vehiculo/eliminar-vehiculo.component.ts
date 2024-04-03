import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-vehiculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrl: './eliminar-vehiculo.component.css'
})
export class EliminarVehiculoComponent {
  placa: string = '';

  confirmar(): void {
    
  }
}
