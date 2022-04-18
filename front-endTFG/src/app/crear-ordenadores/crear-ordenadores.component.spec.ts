import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrdenadoresComponent } from './crear-ordenadores.component';

describe('CrearOrdenadoresComponent', () => {
  let component: CrearOrdenadoresComponent;
  let fixture: ComponentFixture<CrearOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOrdenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
