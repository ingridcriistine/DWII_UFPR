import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEndereco } from './inserir-endereco';

describe('InserirEndereco', () => {
  let component: InserirEndereco;
  let fixture: ComponentFixture<InserirEndereco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirEndereco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEndereco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
