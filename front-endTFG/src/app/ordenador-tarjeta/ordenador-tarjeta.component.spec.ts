import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadorTarjetaComponent } from './ordenador-tarjeta.component';

describe('OrdenadorTarjetaComponent', () => {
  let component: OrdenadorTarjetaComponent;
  let fixture: ComponentFixture<OrdenadorTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenadorTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenadorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
