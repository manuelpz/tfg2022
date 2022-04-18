import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosTarjetaComponent } from './otros-tarjeta.component';

describe('OtrosTarjetaComponent', () => {
  let component: OtrosTarjetaComponent;
  let fixture: ComponentFixture<OtrosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
