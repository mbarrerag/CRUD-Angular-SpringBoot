import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarEventoService } from './Services/registrar-evento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-evento.component.html',
  styleUrl: './registro-evento.component.css'
})
export class RegistroEventoComponent {
  nombreEvento: string = '';
  identificadorLugar: string = '';

  constructor(private registrarEventoService: RegistrarEventoService) { }

  postEvento(): void {
    const datos = {
      "nombreEvento": this.nombreEvento,
      "lugar": this.identificadorLugar
    }
    
    this.registrarEventoService.postEvento(datos).subscribe(
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
