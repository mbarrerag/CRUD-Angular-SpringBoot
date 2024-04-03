import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroViviendaComponent } from './registro-vivienda.component';

describe('RegistroViviendaComponent', () => {
  let component: RegistroViviendaComponent;
  let fixture: ComponentFixture<RegistroViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroViviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
