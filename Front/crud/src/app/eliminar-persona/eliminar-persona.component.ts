import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-persona',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-persona.component.html',
  styleUrl: './eliminar-persona.component.css'
})
export class EliminarPersonaComponent {
  documento: string = '';

  confirmar(): void {
    
  }
}
