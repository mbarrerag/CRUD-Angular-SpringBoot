import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAlcaldeComponent } from './actualizar-alcalde.component';

describe('ActualizarAlcaldeComponent', () => {
  let component: ActualizarAlcaldeComponent;
  let fixture: ComponentFixture<ActualizarAlcaldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarAlcaldeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarAlcaldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
