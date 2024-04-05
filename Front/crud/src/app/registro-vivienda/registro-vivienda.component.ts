import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarViviendaService } from './Services/registrar-vivienda.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private registrarViviendaService: RegistrarViviendaService,
    private router: Router) { }

  postVivienda(): void {
    const datos = {
      "direccion": this.direccion,
      "municipio": this.identificadorMunicipio,
      "propietario": this.identificadorPropietario
    }
    
    this.registrarViviendaService.postVivienda(datos).subscribe(
      (data) => {
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente\nEl identificador de la nueva vivienda es ' + data.idVivienda,
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
