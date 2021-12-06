import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarApartamentosComponent } from './consultar-apartamentos.component';

describe('ConsultarApartamentosComponent', () => {
  let component: ConsultarApartamentosComponent;
  let fixture: ComponentFixture<ConsultarApartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarApartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarApartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
