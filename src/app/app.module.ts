import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarrasuperiorComponent } from './barrasuperior/barrasuperior.component';
import { GeneralComponent } from './general/general.component';
import { Fila1Component } from './fila1/fila1.component';
import { Fila2Component } from './fila2/fila2.component';
import { Fila3Component } from './fila3/fila3.component';
import { Fila4Component } from './fila4/fila4.component';
import { BarrainferiorComponent } from './barrainferior/barrainferior.component';
import { Program2Component } from './program2/program2.component';
import { Ed1Component } from './ed1/ed1.component';
import { Ed2Component } from './ed2/ed2.component';
import { EnsambladorComponent } from './ensamblador/ensamblador.component';
import { CompiComponent } from './compi/compi.component';
import { Si1Component } from './si1/si1.component';
import { Si2Component } from './si2/si2.component';
import { TecnowebComponent } from './tecnoweb/tecnoweb.component';



@NgModule({
  declarations: [
    AppComponent,
    BarrasuperiorComponent,
    GeneralComponent,
    Fila1Component,
    Fila2Component,
    Fila3Component,
    Fila4Component,
    BarrainferiorComponent,
    Program2Component,
    Ed1Component,
    Ed2Component,
    EnsambladorComponent,
    CompiComponent,
    Si1Component,
    Si2Component,
    TecnowebComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
