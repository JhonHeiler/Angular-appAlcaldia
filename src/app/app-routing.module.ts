import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//cargo
import { ListCargoComponent } from './component/cargo/list-cargo/list-cargo.component';
import { AddCargoComponent } from './component/cargo/add-cargo/add-cargo.component';
import { EditCargoComponent } from './component/cargo/edit-cargo/edit-cargo.component';

//prueba
import { ListPruebaComponent } from './component/prueba/list-prueba/list-prueba.component';
import { AddPruebaComponent } from './component/prueba/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './component/prueba/edit-prueba/edit-prueba.component';

//tipo-documento
import { Addtipo_documentoComponent } from './component/tipo-documento/add-tipo-documento/add-tipo-documento.component';
import { Listtipo_documentoComponent } from './component/tipo-documento/list-tipo-documento/list-tipo-documento.component';
import { Edittipo_documentoComponent } from './component/tipo-documento/edit-tipo-documento/edit-tipo-documento.component';

//secretaria
import { AddsecretariaComponent } from './component/secretaria/add-secretaria/add-secretaria.component';
import { ListsecretariaComponent } from './component/secretaria/list-secretaria/list-secretaria.component';
import { EditsecretariaComponent } from './component/secretaria/edit-secretaria/edit-secretaria.component';

//oficina
import { AddoficinaComponent } from './component/oficina/add-oficina/add-oficina.component';
import { ListoficinaComponent } from './component/oficina/list-oficina/list-oficina.component';
import { EditoficinaComponent } from './component/oficina/edit-oficina/edit-oficina.component';

//permisos
import { AddpermisosComponent } from './component/perimisos/add-permisos/add-permisos.component';
import { ListpermisosComponent } from './component/perimisos/list-permisos/list-permisos.component';
import { EditpermisosComponent } from './component/perimisos/edit-permisos/edit-permisos.component';

//funcionario
import { AddfuncionarioComponent } from './component/funcionario/add-funcionario/add-funcionario.component';
import { EditfuncionarioComponent } from './component/funcionario/edit-funcionario/edit-funcionario.component';
import { ListfuncionarioComponent } from './component/funcionario/list-funcionario/list-funcionario.component';

//categoria
import { AddcategoriaComponent } from './component/categoria/add-categoria/add-categoria.component';
import { EditcategoriaComponent } from './component/categoria/edit-categoria/edit-categoria.component';
import { ListcategoriaComponent } from './component/categoria/list-categoria/list-categoria.component';

//actividades_contrato
import { Addactividades_contratoComponent } from './component/actividades_contrato/add-actividades-contrato/add-actividades-contrato.component';
import { Editactividades_contratoComponent } from './component/actividades_contrato/edit-actividades-contrato/edit-actividades-contrato.component';
import { Listactividades_contratoComponent } from './component/actividades_contrato/list-actividades-contrato/list-actividades-contrato.component';

//contratos
import { AddContratosComponent } from './component/contratos/add-contratos/add-contratos.component';
import { EditcontratosComponent } from './component/contratos/edit-contratos/edit-contratos.component';
import { ListcontratosComponent } from './component/contratos/list-contratos/list-contratos.component';

//evidencia
import { AddEvidenciaComponent } from './component/evidencia/add-evidencia/add-evidencia.component';
import { EditevidenciaComponent } from './component/evidencia/edit-evidencia/edit-evidencia.component';
import { ListevidenciaComponent } from './component/evidencia/list-evidencia/list-evidencia.component';

//perosna
import { AddpersonaComponent } from './component/persona/add-persona/add-persona.component';
import { EditpersonaComponent } from './component/persona/edit-persona/edit-persona.component';
import { ListpersonaComponent } from './component/persona/list-persona/list-persona.component';

//guards
import { CanActivateGuard } from './guards/permisos.guard';

//login
import { LoginComponent } from './component/usuario/login.component';

//carrucel
// import { CarrucelComponent } from './component/shared/carrucel/carrucel.component';

//slider
import { SliderComponent } from './slider/slider.component';

//menu
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  //cargo
  { path: 'add-cargo', component: AddCargoComponent },
  { path: 'list-cargo', component: ListCargoComponent },
  { path: 'edit-cargo/:id_cargo', component: EditCargoComponent },

  //prueba
  { path: 'add-prueba', component: AddPruebaComponent },
  { path: 'list-prueba', component: ListPruebaComponent },
  { path: 'edit-prueba/:id_prueba', component: EditPruebaComponent },

  //tipo-documento
  { path: 'add-tipo_documento', component: Addtipo_documentoComponent },
  { path: 'list-tipo_documento', component: Listtipo_documentoComponent },
  { path: 'edit-tipo_documento/:id_prueba', component: Edittipo_documentoComponent, },

  //secretaria
  { path: 'add-secretaria', component: AddsecretariaComponent },
  { path: 'list-secretaria', component: ListsecretariaComponent },
  { path: 'edit-secretaria/:id_secretaria', component: EditsecretariaComponent, },

  //oficina
  { path: 'add-oficina', component: AddoficinaComponent },
  { path: 'list-oficina', component: ListoficinaComponent },
  { path: 'edit-oficina/:id_oficina', component: EditoficinaComponent },

  //permisos
  { path: 'add-permisos', component: AddpermisosComponent },
  { path: 'list-permisos', component: ListpermisosComponent },
  { path: 'edit-permisos/:id_permisos', component: EditpermisosComponent },

  //funcionario
  { path: 'add-funcionario', component: AddfuncionarioComponent },
  { path: 'list-funcionario', component: ListfuncionarioComponent },
  {path: 'edit-funcionario/:id_funcionario',component: EditfuncionarioComponent,},

  //categoria
  { path: 'add-categoria', component: AddcategoriaComponent },
  { path: 'list-categoria', component: ListcategoriaComponent },
  { path: 'edit-categoria/:id_categoria', component: EditcategoriaComponent },

  //actividades_contrato
  { path: 'add-actividades_contrato', component: Addactividades_contratoComponent, },
  { path: 'list-actividades_contrato', component: Listactividades_contratoComponent, },
  { path: 'edit-actividades_contrato/:id_actividades_contrato', component: Editactividades_contratoComponent, },

  //contratos
  { path: 'add-contratos', component: AddContratosComponent },
  { path: 'list-contratos', component: ListcontratosComponent },
  { path: 'edit-contratos/:id_contratos', component: EditcontratosComponent },

  //evidencia
  { path: 'add-evidencia', component: AddEvidenciaComponent },
  { path: 'list-evidencia', component: ListevidenciaComponent },
  { path: 'edit-evidencia/:id_evidencia', component: EditevidenciaComponent },

    //persona
    { path: 'add-persona', component: AddpersonaComponent },
    { path: 'list-persona', component: ListpersonaComponent },
    { path: 'edit-persona/:id_persona', component: EditpersonaComponent },

  //login
  { path: 'login', component: LoginComponent },

  //Carrucel
  // { path: 'Carrucel', component: CarrucelComponent },

  { path: 'slider', component: SliderComponent },

  { path: 'app-menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
