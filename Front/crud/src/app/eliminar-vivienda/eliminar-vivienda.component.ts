import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-vivienda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-vivienda.component.html',
  styleUrl: './eliminar-vivienda.component.css'
})
export class EliminarViviendaComponent {
  idVivienda: string = '';

  confirmar(): void {

  }
}
