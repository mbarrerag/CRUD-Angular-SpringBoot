import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-persona',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-persona.component.html',
  styleUrl: './registro-persona.component.css'
})
export class RegistroPersonaComponent {
  id_documento: string = '';
  nombre1: string = '';
  nombre2: string = '';
  apellido1: string = '';
  apellido2: string = '';
  sexo: string = '';
  fecha_nacimiento: Date = new Date();
  id_vivienda: string = '';
  cabeza_familia: string = '';  

  constructor() {}

  postPersona(): void {
    const vivienda: any = {};

    const data = {
      idDocumento: parseInt(this.id_documento),
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      sexo: this.sexo,
      fechaNacimiento: this.fecha_nacimiento.toISOString().substring(0,10).replace(/-/g, '/'),

    }
  }
}
