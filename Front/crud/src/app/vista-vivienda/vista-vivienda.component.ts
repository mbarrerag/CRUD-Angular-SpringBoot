import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-vivienda',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-vivienda.component.html',
  styleUrl: './vista-vivienda.component.css'
})
export class VistaViviendaComponent {
  idVivienda: string = '';
  vivienda: any;

  buscarVivienda(): void {

  }
}
