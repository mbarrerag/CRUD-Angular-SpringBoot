import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaViviendaComponent } from './vista-vivienda.component';

describe('VistaViviendaComponent', () => {
  let component: VistaViviendaComponent;
  let fixture: ComponentFixture<VistaViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaViviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
