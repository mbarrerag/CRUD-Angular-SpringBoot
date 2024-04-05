import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { GetEventoService } from './Services/get-evento.service';
import Swal from 'sweetalert2';
import { GetPersonaService } from '../vista-persona/Services/get-persona.service';

@Component({
  selector: 'app-vista-evento',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './vista-evento.component.html',
  styleUrl: './vista-evento.component.css'
})
export class VistaEventoComponent {
  idEvento: string = '';
  evento: any;
  personas: string[] = [];

  constructor(private getEventoService: GetEventoService, private getPersonaService: GetPersonaService) { }

  buscarEvento(): void {
    this.getEventoService.getEvento(this.idEvento).subscribe(      
      (data: any) => {
        this.evento = data;
        for (let persona of data.personas) {
          console.log(persona);
          if (!isNaN(Number(persona))) {
            this.getPersonaService.getPersona(persona).subscribe(
              (datos: any) => {
                this.personas.push(datos.nombre1 + ' ' + datos.nombre2 + ' ' +  datos.apellido1 + ' ' +  datos.apellido2);
              },
              () => { 
  
              }
            );
          }
          else {
            this.getPersonaService.getPersona(persona.idDocumento).subscribe(
              (datos: any) => {
                this.personas.push(datos.nombre1 + ' ' + datos.nombre2 + ' ' +  datos.apellido1 + ' ' +  datos.apellido2);
              },
              () => { 
  
              }
            );
          }                  
        }
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
