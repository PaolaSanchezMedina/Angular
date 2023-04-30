import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRfcComponent } from './crear-rfc.component';

describe('CrearRfcComponent', () => {
  let component: CrearRfcComponent;
  let fixture: ComponentFixture<CrearRfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
