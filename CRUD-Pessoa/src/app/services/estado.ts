import { Injectable } from '@angular/core';
import { Estado } from '../shared/models/estado.model';

const LS_CHAVE = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  constructor() {}
  
    listarTodos(): Estado[] {
      const estados = localStorage[LS_CHAVE];
      return estados ? JSON.parse(estados) : [];
    }
  
    insert(estado: Estado): void {
      const estados = this.listarTodos();
      estado.id = new Date().getTime();
      estados.push(estado);
      localStorage[LS_CHAVE] = JSON.stringify(estados);
    }
  
    buscarPorId(id: number): Estado | undefined {
      const estados = this.listarTodos();
      return estados.find(estado => estado.id === id);
    }
    
    atualizar(newEstado: Estado): void {
      const estados = this.listarTodos();
      const oldEstado = estados.find(p => p.id === newEstado.id);
  
      if(oldEstado != undefined) {
        oldEstado.nome = newEstado.nome;
        oldEstado.sigla = newEstado.sigla;
  
        localStorage[LS_CHAVE] = JSON.stringify(estados);
      }
    }
  
    remover(id: number): void {
      let estados = this.listarTodos();
      estados = estados.filter(estado => estado.id !== id);
      localStorage[LS_CHAVE] = JSON.stringify(estados);
    }
}
