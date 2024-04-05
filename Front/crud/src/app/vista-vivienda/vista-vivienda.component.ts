import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { GetViviendaService } from './Services/get-vivienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-vivienda',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-vivienda.component.html',
  styleUrl: './vista-vivienda.component.css'
})
export class VistaViviendaComponent {
  idVivienda: string = '';
  vivienda: any;

  constructor(private getViviendaService: GetViviendaService) { }

  buscarVivienda(): void {
    this.getViviendaService.getVivienda(this.idVivienda).subscribe(
      (data) => {
        this.vivienda = data;
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente',
          'success'
        )
      },
      () => {
        Swal.fire(
          '¡Error!',
          'La acción no se pudo llevar a cabo',
          'error'
        )
      }
    )
  }
}
