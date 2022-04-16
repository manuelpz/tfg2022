import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltrosOrdenadoresComponent } from './aside-filtros-ordenadores.component';

describe('AsideFiltrosOrdenadoresComponent', () => {
  let component: AsideFiltrosOrdenadoresComponent;
  let fixture: ComponentFixture<AsideFiltrosOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltrosOrdenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltrosOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
