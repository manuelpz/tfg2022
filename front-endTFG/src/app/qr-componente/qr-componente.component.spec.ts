import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrComponenteComponent } from './qr-componente.component';

describe('QrComponenteComponent', () => {
  let component: QrComponenteComponent;
  let fixture: ComponentFixture<QrComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
