import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { VistaPersonaComponent } from '../vista-persona/vista-persona.component';
import { GetAllPersonasService } from './Services/get-all-personas.service';

@Component({
  selector: 'app-vista-personas',
  standalone: true,
  imports: [NgFor, VistaPersonaComponent],
  templateUrl: './vista-personas.component.html',
  styleUrl: './vista-personas.component.css'
})
export class VistaPersonasComponent {
  datos: any[] = [];
  pageNumber = 0;
  pageSize = 8;

  constructor(private getAllPersonasService: GetAllPersonasService) { }

  ngOnInit(): void {
    this.obtenerDatosPaginados();
  }

  obtenerDatosPaginados(): void {
    this.getAllPersonasService.obtenerDatosPaginados(this.pageNumber, this.pageSize)
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
