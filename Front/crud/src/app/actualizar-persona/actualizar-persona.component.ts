import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetPersonaService } from '../vista-persona/Services/get-persona.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { UpdatePersonaService } from './Services/update-persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-persona',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-persona.component.html',
  styleUrl: './actualizar-persona.component.css'
})
export class ActualizarPersonaComponent {
  id_documento: string = '';
  nombre1: string = '';
  nombre2: string = '';
  apellido1: string = '';
  apellido2: string = '';
  sexo: string = '';
  fecha_nacimiento: Date = new Date();
  id_vivienda: string = '';
  cabeza_familia: string = '';  

  constructor(private getPersonaService: GetPersonaService,
    private updatePersonaService: UpdatePersonaService,
    private router: Router) {}

  buscarPersona(): void {
    this.getPersonaService.getPersona(this.id_documento).subscribe(
      (data) => {
        this.nombre1 = data.nombre1;
        this.nombre2 = data.nombre2;
        this.apellido1 = data.apellido1;
        this.apellido2 = data.apellido2;
        this.sexo = data.sexo;
        this.fecha_nacimiento = data.fechaNacimiento;
        this.id_vivienda = data.vivienda.idVivienda;
        this.cabeza_familia = data.cabezaFamilia.idDocumento;
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        );
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        );
      }
    )
  }

  updatePersona(): void {
    const data = {
      idDocumento: this.id_documento,
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      sexo: this.sexo,
      fechaNacimiento: this.fecha_nacimiento,
      vivienda: this.id_vivienda,
      cabezaFamilia: this.cabeza_familia
    }

    this.updatePersonaService.putPersona(data).subscribe(
      () => {
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        );
        this.router.navigate(['/home']);
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        );
      }
    );
  }
}
