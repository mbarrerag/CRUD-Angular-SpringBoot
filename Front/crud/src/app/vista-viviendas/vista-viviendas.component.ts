import { Component } from '@angular/core';
import { GetAllViviendasService } from './Services/get-all-viviendas.service';
import { VistaViviendaComponent } from '../vista-vivienda/vista-vivienda.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vista-viviendas',
  standalone: true,
  imports: [VistaViviendaComponent, NgFor],
  templateUrl: './vista-viviendas.component.html',
  styleUrl: './vista-viviendas.component.css'
})
export class VistaViviendasComponent {
  datos: any[] = [];
  pageNumber = 0;
  pageSize = 8;

  constructor(private getAllViviendasService: GetAllViviendasService) { }

  ngOnInit(): void {
    this.obtenerDatosPaginados();
  }

  obtenerDatosPaginados(): void {
    this.getAllViviendasService.obtenerDatosPaginados(this.pageNumber, this.pageSize)
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
