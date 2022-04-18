import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltrosImpresorasComponent } from './aside-filtros-impresoras.component';

describe('AsideFiltrosImpresorasComponent', () => {
  let component: AsideFiltrosImpresorasComponent;
  let fixture: ComponentFixture<AsideFiltrosImpresorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltrosImpresorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltrosImpresorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
