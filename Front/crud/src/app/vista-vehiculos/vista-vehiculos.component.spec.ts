import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVehiculosComponent } from './vista-vehiculos.component';

describe('VistaVehiculosComponent', () => {
  let component: VistaVehiculosComponent;
  let fixture: ComponentFixture<VistaVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaVehiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
