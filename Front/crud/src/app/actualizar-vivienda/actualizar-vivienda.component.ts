import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-vivienda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-vivienda.component.html',
  styleUrl: './actualizar-vivienda.component.css'
})
export class ActualizarViviendaComponent {
  identificadorVivienda: string = '';
  direccion: string = '';
  identificadorMunicipio: string = '';
  identificadorPropietario: string = '';

  updateVivienda(): void {
    
  }
}
