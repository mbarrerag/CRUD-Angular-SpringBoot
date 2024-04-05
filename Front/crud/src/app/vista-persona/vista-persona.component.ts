import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { GetPersonaService } from './Services/get-persona.service';
import Swal from 'sweetalert2';
import { GetEventoService } from '../vista-evento/Services/get-evento.service';

@Component({
  selector: 'app-vista-persona',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './vista-persona.component.html',
  styleUrl: './vista-persona.component.css'
})
export class VistaPersonaComponent {
  documento: string = '';
  persona: any;
  eventos: string[] = [];

  constructor(private getPersonaService: GetPersonaService, private getEventoService: GetEventoService) { }

  buscarPersona(): void {
    this.getPersonaService.getPersona(this.documento).subscribe(
      (data) => {
        this.persona = data;
        for (let evento of data.eventos) {
          console.log(evento);
          if (!isNaN(Number(evento))) {
            this.getEventoService.getEvento(evento).subscribe(
              (datos: any) => {
                this.eventos.push(datos.nombreEvento);
              },
              () => { 
  
              }
            );
          }
          else {
            this.getEventoService.getEvento(evento.idEvento).subscribe(
              (datos: any) => {
                this.eventos.push(datos.nombreEvento);
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
