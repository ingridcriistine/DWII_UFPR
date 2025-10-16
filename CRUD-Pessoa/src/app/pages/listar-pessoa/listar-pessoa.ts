import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-listar-pessoa',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pessoa.html',
  styleUrl: './listar-pessoa.css'
})
export class ListarPessoa implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
    // return [
    //   new Pessoa(1, "Ingrid", 20),
    //   new Pessoa(2, "Jean", 22),
    //   new Pessoa(3, "Milena", 19),
    //   new Pessoa(4, "Maria", 20)
    // ];
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }

}
