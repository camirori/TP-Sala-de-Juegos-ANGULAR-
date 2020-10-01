import { TestBed } from '@angular/core/testing';

import { JuegosPuntajesService } from './juegos-puntajes.service';

describe('JuegosPuntajesService', () => {
  let service: JuegosPuntajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosPuntajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
