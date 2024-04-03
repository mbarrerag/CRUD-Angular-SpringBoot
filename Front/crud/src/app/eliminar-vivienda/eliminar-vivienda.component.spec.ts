import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarViviendaComponent } from './eliminar-vivienda.component';

describe('EliminarViviendaComponent', () => {
  let component: EliminarViviendaComponent;
  let fixture: ComponentFixture<EliminarViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarViviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
