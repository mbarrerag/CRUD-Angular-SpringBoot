import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-vivienda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-vivienda.component.html',
  styleUrl: './registro-vivienda.component.css'
})
export class RegistroViviendaComponent {
  direccion: string = '';
  identificadorMunicipio: string = '';
  identificadorPropietario: string = '';

  updateVivienda(): void {

  }
}
