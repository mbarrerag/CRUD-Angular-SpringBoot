import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaViviendasComponent } from './vista-viviendas.component';

describe('VistaViviendasComponent', () => {
  let component: VistaViviendasComponent;
  let fixture: ComponentFixture<VistaViviendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaViviendasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
