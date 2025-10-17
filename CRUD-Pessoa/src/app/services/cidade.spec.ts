import { TestBed } from '@angular/core/testing';

import { Cidade } from './cidade';

describe('Cidade', () => {
  let service: Cidade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cidade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
