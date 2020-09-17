import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaMasListadoComponent } from './adivina-mas-listado.component';

describe('AdivinaMasListadoComponent', () => {
  let component: AdivinaMasListadoComponent;
  let fixture: ComponentFixture<AdivinaMasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaMasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
