import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
//exportacion de componentes
//cargo

import { AddCargoComponent } from './component/cargo/add-cargo/add-cargo.component';
import { ListCargoComponent } from './component/cargo/list-cargo/list-cargo.component';
import { EditCargoComponent } from './component/cargo/edit-cargo/edit-cargo.component';

//prueba
import { AddPruebaComponent } from './component/prueba/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './component/prueba/edit-prueba/edit-prueba.component';
import { ListPruebaComponent } from './component/prueba/list-prueba/list-prueba.component';

//tipo documento
import {Addtipo_documentoComponent  } from './component/tipo-documento/add-tipo-documento/add-tipo-documento.component';
import { Edittipo_documentoComponent } from './component/tipo-documento/edit-tipo-documento/edit-tipo-documento.component';
import { Listtipo_documentoComponent } from './component/tipo-documento/list-tipo-documento/list-tipo-documento.component';

//secretaria
import { AddsecretariaComponent } from './component/secretaria/add-secretaria/add-secretaria.component';
import { EditsecretariaComponent } from './component/secretaria/edit-secretaria/edit-secretaria.component';
import { ListsecretariaComponent } from './component/secretaria/list-secretaria/list-secretaria.component';

//oficina
import { AddoficinaComponent } from './component/oficina/add-oficina/add-oficina.component';
import { EditoficinaComponent } from './component/oficina/edit-oficina/edit-oficina.component';
import { ListoficinaComponent } from './component/oficina/list-oficina/list-oficina.component';

//permisos
import { AddpermisosComponent } from './component/perimisos/add-permisos/add-permisos.component';
import { EditpermisosComponent } from './component/perimisos/edit-permisos/edit-permisos.component';
import { ListpermisosComponent } from './component/perimisos/list-permisos/list-permisos.component';

//funcionario
import { AddfuncionarioComponent } from './component/funcionario/add-funcionario/add-funcionario.component';
import { EditfuncionarioComponent } from './component/funcionario/edit-funcionario/edit-funcionario.component';
import { ListfuncionarioComponent } from './component/funcionario/list-funcionario/list-funcionario.component';

//categoria
import { AddcategoriaComponent } from './component/categoria/add-categoria/add-categoria.component';
import { EditcategoriaComponent } from './component/categoria/edit-categoria/edit-categoria.component';
import { ListcategoriaComponent } from './component/categoria/list-categoria/list-categoria.component';

//contratos
import { AddContratosComponent } from './component/contratos/add-contratos/add-contratos.component';
import { EditcontratosComponent } from './component/contratos/edit-contratos/edit-contratos.component';
import {  ListcontratosComponent } from './component/contratos/list-contratos/list-contratos.component';

//actividades_contrato
import { Addactividades_contratoComponent } from './component/actividades_contrato/add-actividades-contrato/add-actividades-contrato.component';
import {Editactividades_contratoComponent  } from './component/actividades_contrato/edit-actividades-contrato/edit-actividades-contrato.component';
import {Listactividades_contratoComponent  } from './component/actividades_contrato/list-actividades-contrato/list-actividades-contrato.component';

//evidencia
import { AddEvidenciaComponent } from './component/evidencia/add-evidencia/add-evidencia.component';
import { EditevidenciaComponent } from './component/evidencia/edit-evidencia/edit-evidencia.component';
import { ListevidenciaComponent } from './component/evidencia/list-evidencia/list-evidencia.component';

//persona
import { AddpersonaComponent } from './component/persona/add-persona/add-persona.component';
import { EditpersonaComponent } from './component/persona/edit-persona/edit-persona.component';
import { ListpersonaComponent } from './component/persona/list-persona/list-persona.component';

//login
import { LoginComponent } from './component/usuario/login.component';

//carrucel
// import { CarrucelComponent } from './component/shared/carrucel/carrucel.component';

//slider
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './component/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,

    //cargo
    AddCargoComponent,
    ListCargoComponent,
    EditCargoComponent,
    //prueba
    AddPruebaComponent,
    EditPruebaComponent,
    ListPruebaComponent,
    //Tipo-documento
    Addtipo_documentoComponent,
    Edittipo_documentoComponent,
    Listtipo_documentoComponent,
    //secretaria
    AddsecretariaComponent,
    EditsecretariaComponent,
    ListsecretariaComponent,
    //oficina
    AddoficinaComponent,
    EditoficinaComponent,
    ListoficinaComponent,
    //permisos
    AddpermisosComponent,
    EditpermisosComponent,
    ListpermisosComponent,

    //funcionario
    AddfuncionarioComponent,
    EditfuncionarioComponent,
    ListfuncionarioComponent,

    //categoria
    AddcategoriaComponent,
    EditcategoriaComponent,
    ListcategoriaComponent,

    //contratos
    AddContratosComponent,
    EditcontratosComponent,
    ListcontratosComponent,


    //actividades_contrato
    Addactividades_contratoComponent,
    Editactividades_contratoComponent,
    Listactividades_contratoComponent,

    //evidencia
    AddEvidenciaComponent,
    EditevidenciaComponent,
    ListevidenciaComponent,

    //persona
    AddpersonaComponent,
    EditpersonaComponent,
    ListpersonaComponent,

    //login
    LoginComponent,

    //carrucel
    //  CarrucelComponent,
     SliderComponent,
     MenuComponent,
     //

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
