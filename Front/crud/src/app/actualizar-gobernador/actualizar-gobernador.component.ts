import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UpdateGobernadorService } from './Services/update-gobernador.service';

@Component({
  selector: 'app-actualizar-gobernador',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-gobernador.component.html',
  styleUrl: './actualizar-gobernador.component.css'
})
export class ActualizarGobernadorComponent {
  identificadorDepartamento: string = '';
  nombreDepartamento: string = '';
  identificadorGobernador: string = '';

  constructor(private updateGobernadorService: UpdateGobernadorService,
    private router: Router) { }

  getDepartamento(): void {
    this.updateGobernadorService.getDepartamento(this.identificadorDepartamento).subscribe(
      (data: any) => {
        this.nombreDepartamento = data.nombreDepartamento,
        this.identificadorGobernador = data.gobernador.idDocumento
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

  updateDepartamento(): void {
    const data = {
      "idDepartamento": this.identificadorDepartamento,
      "nombreDepartamento": this.nombreDepartamento
    }

    this.updateGobernadorService.putDepartamento(this.identificadorGobernador, data).subscribe(
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
