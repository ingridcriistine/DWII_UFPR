import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado';

@Component({
  selector: 'app-listar-estado',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-estado.html',
  styleUrl: './listar-estado.css'
})
export class ListarEstado implements OnInit {

  estados: Estado[] = [];

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }
  
  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado ${estado.nome}?`)) {
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
}
