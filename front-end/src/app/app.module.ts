import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CursolistComponent } from './curso/cursolist/cursolist.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { TurmaListComponent } from './turma/turma-list/turmalist.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { HomeNavebarComponent } from './homepage/home-navebar/home-navebar.component';
import { FontListComponent } from './font/font-list/font-list.component';
import { FontFormComponent } from './font/font-form/font-form.component';
import { InterfaceListComponent } from './interface/interface-list/interface-list.component';
import { InterfaceFormComponent } from './interface/interface-form/interface-form.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { AnotacaoListComponent } from './anotacao/anatacao-list/anatacao-list.component';
import { AnotacaoFormComponent } from './anotacao/anotacao-form/anotacao-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    CursolistComponent,
    CursoFormComponent,
    TurmaListComponent,
    TurmaFormComponent,
    HomeNavebarComponent,
    FontListComponent,
    FontFormComponent,
    InterfaceListComponent,
    InterfaceFormComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    AnotacaoListComponent,
    AnotacaoFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
