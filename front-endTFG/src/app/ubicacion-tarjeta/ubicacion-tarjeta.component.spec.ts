import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionTarjetaComponent } from './ubicacion-tarjeta.component';

describe('UbicacionTarjetaComponent', () => {
  let component: UbicacionTarjetaComponent;
  let fixture: ComponentFixture<UbicacionTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
