import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltrosOtrosComponent } from './aside-filtros-otros.component';

describe('AsideFiltrosOtrosComponent', () => {
  let component: AsideFiltrosOtrosComponent;
  let fixture: ComponentFixture<AsideFiltrosOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltrosOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltrosOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
