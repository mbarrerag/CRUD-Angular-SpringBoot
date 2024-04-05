import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateEventoService } from './Services/update-evento.service';
import { GetEventoService } from '../vista-evento/Services/get-evento.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-evento',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-evento.component.html',
  styleUrl: './actualizar-evento.component.css'
})
export class ActualizarEventoComponent {
  identificadorEvento: string = '';
  nombreEvento: string = '';
  identificadorVivienda: string = '';

  constructor(private updateEventoService: UpdateEventoService,
    private getEventoService: GetEventoService,
    private router: Router) { }

  buscarEvento(): void {
    this.getEventoService.getEvento(this.identificadorEvento).subscribe(
      (data: any) => {
        this.nombreEvento = data.nombreEvento,
        this.identificadorVivienda = data.lugar.idVivienda
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

  updateEvento(): void {
    const data = {
      "idEvento": this.identificadorEvento,
      "nombreEvento": this.nombreEvento,
      "lugar": this.identificadorVivienda
    }

    this.updateEventoService.putEvento(data).subscribe(
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
