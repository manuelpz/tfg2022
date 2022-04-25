import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltrosPantallasComponent } from './aside-filtros-pantallas.component';

describe('AsideFiltrosPantallasComponent', () => {
  let component: AsideFiltrosPantallasComponent;
  let fixture: ComponentFixture<AsideFiltrosPantallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltrosPantallasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltrosPantallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
