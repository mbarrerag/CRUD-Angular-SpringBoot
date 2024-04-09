import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGobernadorComponent } from './actualizar-gobernador.component';

describe('ActualizarGobernadorComponent', () => {
  let component: ActualizarGobernadorComponent;
  let fixture: ComponentFixture<ActualizarGobernadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarGobernadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarGobernadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
