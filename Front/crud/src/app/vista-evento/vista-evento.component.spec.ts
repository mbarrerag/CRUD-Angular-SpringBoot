import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEventoComponent } from './vista-evento.component';

describe('VistaEventoComponent', () => {
  let component: VistaEventoComponent;
  let fixture: ComponentFixture<VistaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
