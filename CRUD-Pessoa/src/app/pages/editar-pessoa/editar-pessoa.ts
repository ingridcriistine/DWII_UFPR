import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../../services/pessoa-service';

@Component({
  selector: 'app-editar-pessoa',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-pessoa.html',
  styleUrl: './editar-pessoa.css'
})
export class EditarPessoa implements OnInit {
  
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPorId(id);

    if(res !== undefined) this.pessoa = res;
    else throw new Error("Pessoa não encontrada: id = " + id);
  }

  atualizar(): void {
    if(this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }

}
