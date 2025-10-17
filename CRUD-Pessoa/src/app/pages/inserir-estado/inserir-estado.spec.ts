import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEstado } from './inserir-estado';

describe('InserirEstado', () => {
  let component: InserirEstado;
  let fixture: ComponentFixture<InserirEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEstado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
