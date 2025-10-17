import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCidade } from './listar-cidade';

describe('ListarCidade', () => {
  let component: ListarCidade;
  let fixture: ComponentFixture<ListarCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
