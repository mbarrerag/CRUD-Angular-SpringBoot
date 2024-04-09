import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaEventoComponent } from './persona-evento.component';

describe('PersonaEventoComponent', () => {
  let component: PersonaEventoComponent;
  let fixture: ComponentFixture<PersonaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
