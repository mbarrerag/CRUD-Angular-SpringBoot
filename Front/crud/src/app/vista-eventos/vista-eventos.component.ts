import { Component } from '@angular/core';
import { GetAllEventosService } from './Services/get-all-eventos.service';
import { VistaEventoComponent } from '../vista-evento/vista-evento.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vista-eventos',
  standalone: true,
  imports: [VistaEventoComponent, NgFor],
  templateUrl: './vista-eventos.component.html',
  styleUrl: './vista-eventos.component.css'
})
export class VistaEventosComponent {
  datos: any[] = [];
  pageNumber = 0;
  pageSize = 8;

  constructor(private getAllEventosService: GetAllEventosService) { }

  ngOnInit(): void {
    this.obtenerDatosPaginados();
  }

  obtenerDatosPaginados(): void {
    this.getAllEventosService.obtenerDatosPaginados(this.pageNumber, this.pageSize)
      .subscribe(data => {
        this.datos = data.content;
        console.log(this.datos)
      });
  }

  // Funciones para manejar la paginación
  nextPage(): void {
    this.pageNumber++;
    this.obtenerDatosPaginados();
  }

  previousPage(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.obtenerDatosPaginados();
    }
  }
}
