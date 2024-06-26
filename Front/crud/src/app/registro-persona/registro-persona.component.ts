import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarUsuarioService } from './Services/registrar-usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


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

  constructor(private registrarUsuarioService: RegistrarUsuarioService,
    private router: Router) { }

  postPersona(): void {

    const datos = {
      "idDocumento": parseInt(this.id_documento),
      "nombre1": this.nombre1,
      "nombre2": this.nombre2,
      "apellido1": this.apellido1,
      "apellido2": this.apellido2,
      "sexo": this.sexo,
      "fechaNacimiento": this.fecha_nacimiento,
      "vivienda": parseInt(this.id_vivienda),
      "cabezaFamilia": parseInt(this.cabeza_familia)
    }

    this.registrarUsuarioService.postPersona(datos).subscribe(
      (data) => {
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
