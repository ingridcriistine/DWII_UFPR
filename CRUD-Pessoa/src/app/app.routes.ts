import { Routes } from '@angular/router';
import { ListarPessoa } from './pages/listar-pessoa/listar-pessoa';
import { InserirPessoa } from './pages/inserir-pessoa/inserir-pessoa';
import { EditarPessoa } from './pages/editar-pessoa/editar-pessoa';

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
    }
];
