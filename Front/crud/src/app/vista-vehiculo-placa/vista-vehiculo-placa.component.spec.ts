import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVehiculoPlacaComponent } from './vista-vehiculo-placa.component';

describe('VistaVehiculoPlacaComponent', () => {
  let component: VistaVehiculoPlacaComponent;
  let fixture: ComponentFixture<VistaVehiculoPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaVehiculoPlacaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaVehiculoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
