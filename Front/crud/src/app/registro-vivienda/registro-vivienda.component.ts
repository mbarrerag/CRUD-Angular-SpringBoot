import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarViviendaService } from './Services/registrar-vivienda.service';
import Swal from 'sweetalert2';

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

  constructor(private registrarViviendaService: RegistrarViviendaService) { }

  postVivienda(): void {
    const datos = {
      "direccion": this.direccion,
      "municipio": this.identificadorMunicipio,
      "propietario": this.identificadorPropietario
    }
    
    this.registrarViviendaService.postVivienda(datos).subscribe(
      () => {
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
    );
  }
}
