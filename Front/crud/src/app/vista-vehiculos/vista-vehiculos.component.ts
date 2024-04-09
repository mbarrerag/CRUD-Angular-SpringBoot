import { Component } from '@angular/core';
import { GetAllVehiculosService } from './Services/get-all-vehiculos.service';
import { VistaVehiculoComponent } from '../vista-vehiculo/vista-vehiculo.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vista-vehiculos',
  standalone: true,
  imports: [VistaVehiculoComponent, NgFor],
  templateUrl: './vista-vehiculos.component.html',
  styleUrl: './vista-vehiculos.component.css'
})
export class VistaVehiculosComponent {
  datos: any[] = [];
  pageNumber = 0;
  pageSize = 8;

  constructor(private getAllVehiculosService: GetAllVehiculosService) { }

  ngOnInit(): void {
    this.obtenerDatosPaginados();
  }

  obtenerDatosPaginados(): void {
    this.getAllVehiculosService.obtenerDatosPaginados(this.pageNumber, this.pageSize)
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
