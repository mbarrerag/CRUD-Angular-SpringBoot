import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
}
