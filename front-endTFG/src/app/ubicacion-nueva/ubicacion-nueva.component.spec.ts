import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionNuevaComponent } from './ubicacion-nueva.component';

describe('UbicacionNuevaComponent', () => {
  let component: UbicacionNuevaComponent;
  let fixture: ComponentFixture<UbicacionNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
