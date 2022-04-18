import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosOtrosComponent } from './resultados-otros.component';

describe('ResultadosOtrosComponent', () => {
  let component: ResultadosOtrosComponent;
  let fixture: ComponentFixture<ResultadosOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
