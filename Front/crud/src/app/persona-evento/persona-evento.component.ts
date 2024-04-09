import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPersonaEventoService } from './Services/add-persona-evento.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GetPersonaService } from '../vista-persona/Services/get-persona.service';

@Component({
  selector: 'app-persona-evento',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './persona-evento.component.html',
  styleUrl: './persona-evento.component.css'
})
export class PersonaEventoComponent {
  idDocumento: string = '';
  idEvento: string = '';

  constructor(private addPersonaEventoService: AddPersonaEventoService,
    private getPersonaService: GetPersonaService,
    private router: Router) { }

  addPersonaEvento(): void {
    this.getPersonaService.getPersona(this.idDocumento).subscribe(
      (data) => {
        this.addPersonaEventoService.addPersonaEvento(this.idDocumento, this.idEvento, {"datos": "datos"}).subscribe(
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
      },
      () => {

      }
    )
  }
}
