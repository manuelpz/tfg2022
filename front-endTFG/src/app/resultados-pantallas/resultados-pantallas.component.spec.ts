import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPantallasComponent } from './resultados-pantallas.component';

describe('ResultadosPantallasComponent', () => {
  let component: ResultadosPantallasComponent;
  let fixture: ComponentFixture<ResultadosPantallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPantallasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPantallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
