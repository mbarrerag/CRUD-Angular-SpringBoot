import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeleteViviendaService } from './Services/delete-vivienda.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-vivienda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-vivienda.component.html',
  styleUrl: './eliminar-vivienda.component.css'
})
export class EliminarViviendaComponent {
  idVivienda: string = '';

  constructor(private deleteViviendaService: DeleteViviendaService,
    private router: Router) { }

  confirmar(): void {
    this.deleteViviendaService.deleteVivienda(this.idVivienda).subscribe(
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
