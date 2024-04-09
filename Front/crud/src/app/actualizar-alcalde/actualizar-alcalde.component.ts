import { Component } from '@angular/core';
import { UpdateAlcaldeService } from './Services/update-alcalde.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-alcalde',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './actualizar-alcalde.component.html',
  styleUrl: './actualizar-alcalde.component.css'
})
export class ActualizarAlcaldeComponent {
  identificadorMunicipio: string = '';
  nombreMunicipio: string = '';
  identificadorAlcalde: string = '';

  constructor(private updateAlcaldeService: UpdateAlcaldeService,
    private router: Router) { }

  getMunicipio(): void {
    this.updateAlcaldeService.getMunicipio(this.identificadorMunicipio).subscribe(
      (data: any) => {
        this.nombreMunicipio = data.nombreMunicipio,
        this.identificadorAlcalde = data.alcalde.idDocumento
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

  updateMunicipio(): void {
    const data = {
      "idMunicipio": this.identificadorMunicipio,
      "nombreMunicipio": this.nombreMunicipio
    }

    this.updateAlcaldeService.putMunicipio(this.identificadorAlcalde, data).subscribe(
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
