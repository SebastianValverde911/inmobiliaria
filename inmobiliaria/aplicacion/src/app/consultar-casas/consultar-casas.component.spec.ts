import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCasasComponent } from './consultar-casas.component';

describe('ConsultarCasasComponent', () => {
  let component: ConsultarCasasComponent;
  let fixture: ComponentFixture<ConsultarCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
