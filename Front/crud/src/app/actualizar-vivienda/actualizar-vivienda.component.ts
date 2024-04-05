import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetViviendaService } from '../vista-vivienda/Services/get-vivienda.service';
import { UpdateViviendaService } from './Services/update-vivienda.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-vivienda',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-vivienda.component.html',
  styleUrl: './actualizar-vivienda.component.css'
})
export class ActualizarViviendaComponent {
  identificadorVivienda: string = '';
  direccion: string = '';
  identificadorMunicipio: string = '';
  identificadorPropietario: string = '';

  constructor(private getViviendaService: GetViviendaService,
    private updateViviendaService: UpdateViviendaService,
    private router: Router) { }

  buscarVivienda(): void {
    this.getViviendaService.getVivienda(this.identificadorVivienda).subscribe(
      (data) => {
        this.direccion = data.direccion;
        this.identificadorMunicipio = data.municipio.idMunicipio;
        this.identificadorPropietario = data.propietario.idDocumento;
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

  updateVivienda(): void {
    const data = {
      "idVivienda": this.identificadorVivienda,
      "direccion": this.direccion,
      "idMunicipio": this.identificadorMunicipio,
      "idPropietario": this.identificadorPropietario
    }

    this.updateViviendaService.putVivienda(data).subscribe(
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
