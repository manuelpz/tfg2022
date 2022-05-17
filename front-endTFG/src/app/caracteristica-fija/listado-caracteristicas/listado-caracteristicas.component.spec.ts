import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCaracteristicasComponent } from './listado-caracteristicas.component';

describe('ListadoCaracteristicasComponent', () => {
  let component: ListadoCaracteristicasComponent;
  let fixture: ComponentFixture<ListadoCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
