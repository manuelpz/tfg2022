import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosOrdenadoresComponent } from './resultados-ordenadores.component';

describe('ResultadosOrdenadoresComponent', () => {
  let component: ResultadosOrdenadoresComponent;
  let fixture: ComponentFixture<ResultadosOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosOrdenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
