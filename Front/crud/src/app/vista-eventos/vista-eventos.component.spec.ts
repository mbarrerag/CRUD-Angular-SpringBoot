import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEventosComponent } from './vista-eventos.component';

describe('VistaEventosComponent', () => {
  let component: VistaEventosComponent;
  let fixture: ComponentFixture<VistaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
