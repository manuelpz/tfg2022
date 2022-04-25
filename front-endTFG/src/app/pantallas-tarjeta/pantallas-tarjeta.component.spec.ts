import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallasTarjetaComponent } from './pantallas-tarjeta.component';

describe('PantallasTarjetaComponent', () => {
  let component: PantallasTarjetaComponent;
  let fixture: ComponentFixture<PantallasTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallasTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallasTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
