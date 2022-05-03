import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltrosTiposComponent } from './aside-filtros-tipos.component';

describe('AsideFiltrosTiposComponent', () => {
  let component: AsideFiltrosTiposComponent;
  let fixture: ComponentFixture<AsideFiltrosTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltrosTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltrosTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
