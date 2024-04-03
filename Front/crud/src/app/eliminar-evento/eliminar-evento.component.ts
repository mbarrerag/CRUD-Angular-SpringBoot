import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-evento.component.html',
  styleUrl: './eliminar-evento.component.css'
})
export class EliminarEventoComponent {
  idEvento: string = '';

  confirmar(): void {
    
  }
}
