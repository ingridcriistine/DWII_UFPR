import { Routes } from '@angular/router';
import { ListarPessoa } from './pages/listar-pessoa/listar-pessoa';
import { InserirPessoa } from './pages/inserir-pessoa/inserir-pessoa';
import { EditarPessoa } from './pages/editar-pessoa/editar-pessoa';
import { ListarEstado } from './pages/listar-estado/listar-estado';
import { InserirEstado } from './pages/inserir-estado/inserir-estado';
import { EditarEstado } from './pages/editar-estado/editar-estado';
import { ListarCidade } from './pages/listar-cidade/listar-cidade';
import { InserirCidade } from './pages/inserir-cidade/inserir-cidade';
import { EditarCidade } from './pages/editar-cidade/editar-cidade';
import { ListarEndereco } from './pages/listar-endereco/listar-endereco';
import { InserirEndereco } from './pages/inserir-endereco/inserir-endereco';
import { EditarEndereco } from './pages/editar-endereco/editar-endereco';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pessoas/listar',
        pathMatch: 'full'
    },
    {
        path: 'pessoas',
        redirectTo: 'pessoas/listar'
    },
    {
        path: 'pessoas/listar',
        component: ListarPessoa
    },
    {
        path: 'pessoas/novo',
        component: InserirPessoa
    },
    {
        path: 'pessoas/editar/:id',
        component: EditarPessoa
    },
    {
        path: 'enderecos',
        redirectTo: 'enderecos/listar'
    },
    {
        path: 'enderecos/listar',
        component: ListarEndereco
    },
    {
        path: 'enderecos/novo',
        component: InserirEndereco
    },
    {
        path: 'enderecos/editar/:id',
        component: EditarEndereco
    },
    {
        path: 'estados',
        redirectTo: 'estados/listar'
    },
    {
        path: 'estados/listar',
        component: ListarEstado
    },
    {
        path: 'estados/novo',
        component: InserirEstado
    },
    {
        path: 'estados/editar/:id',
        component: EditarEstado
    },
    {
        path: 'cidades',
        redirectTo: 'cidades/listar'
    },
    {
        path: 'cidades/listar',
        component: ListarCidade
    },
    {
        path: 'cidades/novo',
        component: InserirCidade
    },
    {
        path: 'cidades/editar/:id',
        component: EditarCidade
    }
];
