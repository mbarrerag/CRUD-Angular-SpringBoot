import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { RegistroVehiculoComponent } from './registro-vehiculo/registro-vehiculo.component';
import { VistaVehiculoComponent } from './vista-vehiculo/vista-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';
import { ActualizarVehiculoComponent } from './actualizar-vehiculo/actualizar-vehiculo.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { VistaEventoComponent } from './vista-evento/vista-evento.component';
import { EliminarEventoComponent } from './eliminar-evento/eliminar-evento.component';
import { ActualizarEventoComponent } from './actualizar-evento/actualizar-evento.component';
import { RegistroViviendaComponent } from './registro-vivienda/registro-vivienda.component';
import { VistaViviendaComponent } from './vista-vivienda/vista-vivienda.component';
import { EliminarViviendaComponent } from './eliminar-vivienda/eliminar-vivienda.component';
import { ActualizarViviendaComponent } from './actualizar-vivienda/actualizar-vivienda.component';
import { VistaPersonasComponent } from './vista-personas/vista-personas.component';
import { VistaEventosComponent } from './vista-eventos/vista-eventos.component';
import { VistaVehiculosComponent } from './vista-vehiculos/vista-vehiculos.component';
import { VistaViviendasComponent } from './vista-viviendas/vista-viviendas.component';
import { PersonaEventoComponent } from './persona-evento/persona-evento.component';
import { ActualizarAlcaldeComponent } from './actualizar-alcalde/actualizar-alcalde.component';
import { ActualizarGobernadorComponent } from './actualizar-gobernador/actualizar-gobernador.component';
import { VistaVehiculoPlacaComponent } from './vista-vehiculo-placa/vista-vehiculo-placa.component';



export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'registropersona', component: RegistroPersonaComponent },
    { path: 'vistapersona', component: VistaPersonaComponent },
    { path: 'borrarpersona', component: EliminarPersonaComponent },
    { path: 'actualizacionpersona', component: ActualizarPersonaComponent },
    { path: 'registrovehiculo', component: RegistroVehiculoComponent },
    { path: 'vistavehiculo', component: VistaVehiculoComponent },
    { path: 'borrarvehiculo', component: EliminarVehiculoComponent },
    { path: 'actualizacionvehiculo', component: ActualizarVehiculoComponent },
    { path: 'registroevento', component: RegistroEventoComponent },
    { path: 'vistaevento', component: VistaEventoComponent },
    { path: 'borrarevento', component: EliminarEventoComponent },
    { path: 'actualizacionevento', component: ActualizarEventoComponent },
    { path: 'registrovivienda', component: RegistroViviendaComponent },
    { path: 'vistavivienda', component: VistaViviendaComponent },
    { path: 'borrarvivienda', component: EliminarViviendaComponent },
    { path: 'actualizacionvivienda', component: ActualizarViviendaComponent },
    { path: 'vistaviviendas', component: VistaViviendasComponent },
    { path: 'vistaeventos', component: VistaEventosComponent },
    { path: 'vistavehiculos', component: VistaVehiculosComponent },
    { path: 'vistapersonas', component: VistaPersonasComponent },
    { path: 'personaevento', component: PersonaEventoComponent },
    { path: 'actualizaralcalde', component: ActualizarAlcaldeComponent },
    { path: 'actualizargobernador', component: ActualizarGobernadorComponent },  
    { path: 'vistavehiculoplaca', component: VistaVehiculoPlacaComponent },
    { path: '',  component: HomePageComponent },
    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
