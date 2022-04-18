import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresorasTarjetaComponent } from './impresoras-tarjeta.component';

describe('ImpresorasTarjetaComponent', () => {
  let component: ImpresorasTarjetaComponent;
  let fixture: ComponentFixture<ImpresorasTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresorasTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresorasTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
