import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosImpresorasComponent } from './resultados-impresoras.component';

describe('ResultadosImpresorasComponent', () => {
  let component: ResultadosImpresorasComponent;
  let fixture: ComponentFixture<ResultadosImpresorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosImpresorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosImpresorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
