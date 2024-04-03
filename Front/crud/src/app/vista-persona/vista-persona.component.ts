import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-persona',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './vista-persona.component.html',
  styleUrl: './vista-persona.component.css'
})
export class VistaPersonaComponent {
  documento: string = '';
  persona: any = {};

  buscarPersona() {

  }
}
