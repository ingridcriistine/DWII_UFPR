import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPessoa } from './editar-pessoa';

describe('EditarPessoa', () => {
  let component: EditarPessoa;
  let fixture: ComponentFixture<EditarPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPessoa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPessoa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
