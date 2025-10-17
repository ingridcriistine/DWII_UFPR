import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado';

@Component({
  selector: 'app-inserir-estado',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-estado.html',
  styleUrl: './inserir-estado.css'
})
export class InserirEstado {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();

  constructor(private estadoService: EstadoService, private router: Router) {}

  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.insert(this.estado);
      this.router.navigate(["/estados"]);
    }
  }
}
