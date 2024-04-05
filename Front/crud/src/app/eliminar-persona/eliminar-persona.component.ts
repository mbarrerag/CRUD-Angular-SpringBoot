import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeletePersonaService } from './Services/delete-persona.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-persona',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-persona.component.html',
  styleUrl: './eliminar-persona.component.css'
})
export class EliminarPersonaComponent {
  documento: string = '';

  constructor(private deletePersonaService: DeletePersonaService,
    private router: Router) { }

  confirmar(): void {
    this.deletePersonaService.deletePersona(this.documento).subscribe(
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
