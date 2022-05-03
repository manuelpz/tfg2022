import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposResultadosComponent } from './tipos-resultados.component';

describe('TiposResultadosComponent', () => {
  let component: TiposResultadosComponent;
  let fixture: ComponentFixture<TiposResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
