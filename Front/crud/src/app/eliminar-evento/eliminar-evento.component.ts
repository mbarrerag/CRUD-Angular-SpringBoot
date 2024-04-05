import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeleteEventoService } from './Services/delete-evento.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-evento.component.html',
  styleUrl: './eliminar-evento.component.css'
})
export class EliminarEventoComponent {
  idEvento: string = '';

  constructor(private deleteEventoService: DeleteEventoService,
    private router: Router) { }

  confirmar(): void {
    this.deleteEventoService.deleteEvento(this.idEvento).subscribe(
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
    )
  }
}
