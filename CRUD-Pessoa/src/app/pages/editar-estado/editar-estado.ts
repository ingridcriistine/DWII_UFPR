import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado';

@Component({
  selector: 'app-editar-estado',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-estado.html',
  styleUrl: './editar-estado.css'
})
export class EditarEstado implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();

  constructor(private estadoService: EstadoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorId(id);

    if (res !== undefined) this.estado = res;
    else throw new Error("Estado não encontrado: id = " + id);
  }

  atualizar(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }

}
