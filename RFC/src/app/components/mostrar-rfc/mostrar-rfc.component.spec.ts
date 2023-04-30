import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRfcComponent } from './mostrar-rfc.component';

describe('MostrarRfcComponent', () => {
  let component: MostrarRfcComponent;
  let fixture: ComponentFixture<MostrarRfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarRfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarRfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
