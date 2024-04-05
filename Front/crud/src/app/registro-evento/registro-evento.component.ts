import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarEventoService } from './Services/registrar-evento.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private registrarEventoService: RegistrarEventoService,
    private router: Router) { }

  postEvento(): void {
    const datos = {
      "nombreEvento": this.nombreEvento,
      "lugar": this.identificadorLugar
    }
    
    this.registrarEventoService.postEvento(datos).subscribe(
      (data) => {
        Swal.fire(
          '¡Éxito!',
          'La acción fue ejecutada correctamente\nEl identificador del nuevo evento es ' + data.idEvento,
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
