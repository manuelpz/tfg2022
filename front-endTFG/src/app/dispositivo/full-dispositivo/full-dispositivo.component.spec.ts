import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDispositivoComponent } from './full-dispositivo.component';

describe('FullDispositivoComponent', () => {
  let component: FullDispositivoComponent;
  let fixture: ComponentFixture<FullDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
