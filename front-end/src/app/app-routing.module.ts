import { PastaFormComponent } from './pasta/pasta-form/pasta-form.component';
import { PastaListComponent } from './pasta/pasta-list/pasta-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { AnotacaoFormComponent } from './anotacao/anotacao-form/anotacao-form.component';
import { AnotacaoListComponent } from './anotacao/anatacao-list/anatacao-list.component';
import { InterfaceListComponent } from './interface/interface-list/interface-list.component';
import { FontFormComponent } from './font/font-form/font-form.component';
import { FontListComponent } from './font/font-list/font-list.component';
import { TurmaListComponent } from './turma/turma-list/turmalist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursolistComponent } from './curso/cursolist/cursolist.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { InterfaceFormComponent } from './interface/interface-form/interface-form.component';
import { PastaListPlanbComponent } from './pasta/pasta-list-planb/pasta-list-planb.component';

const routes: Routes = [
  {path: 'curso', component: CursolistComponent},
  {path: 'curso/novo', component:CursoFormComponent},
  {path: 'curso/:id', component: CursoFormComponent},
  
  {path: 'turma', component: TurmaListComponent},
  {path: 'turma/novo', component: TurmaFormComponent},
  {path: 'turma/:id', component: TurmaFormComponent},

  {path: 'texto', component: FontListComponent},
  {path: 'texto/novo', component: FontFormComponent},
  {path: 'texto/:id', component: FontFormComponent},

  {path: 'interface', component: InterfaceListComponent},
  {path: 'interface/novo', component: InterfaceFormComponent},
  {path: 'interface/:id', component: InterfaceFormComponent},

  {path: 'anotacao', component: AnotacaoListComponent},
  {path: 'anotacao/novo', component: AnotacaoFormComponent},
  {path: 'anotacao/:id', component: AnotacaoFormComponent},

  {path: 'usuario', component: UsuarioListComponent},
  {path: 'usuario/novo', component: UsuarioFormComponent},
  {path: 'usuario/:id', component: UsuarioFormComponent},

  // {path: 'pasta', component: PastaListComponent},
  // {path: 'pasta/novo', component: PastaListComponent},
  // {path: 'pasta/:id', component: PastaListComponent},

  {path: 'pasta', component: PastaListPlanbComponent},
  {path: 'pasta/novo', component: PastaFormComponent},
  {path: 'pasta/:id', component: PastaFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
