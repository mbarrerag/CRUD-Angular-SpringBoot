import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-evento',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-evento.component.html',
  styleUrl: './vista-evento.component.css'
})
export class VistaEventoComponent {
  idEvento: string = '';
  evento: any = {};

  buscarEvento() {

  }
}
