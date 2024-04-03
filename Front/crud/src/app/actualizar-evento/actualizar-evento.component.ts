import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-evento.component.html',
  styleUrl: './actualizar-evento.component.css'
})
export class ActualizarEventoComponent {
  identificadorEvento: string = '';
  nombreEvento: string = '';
  identificadorVivienda: string = '';

  updateEvento(): void {
    
  }
}
