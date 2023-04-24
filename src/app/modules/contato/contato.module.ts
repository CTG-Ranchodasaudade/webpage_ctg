import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from '../../pages/contato/contato.component';
import {HomeModule} from '../home/home.module';

import {CardContatoComponent} from '../../components/card-contato/card-contato.component';
import {LocalizacaoComponent} from '../../components/localizacao/localizacao.component';

@NgModule({
  declarations: [
    ContatoComponent,
    CardContatoComponent,
    LocalizacaoComponent
  ],exports:[
    ContatoComponent,
    CardContatoComponent,
    LocalizacaoComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class ContatoModule { }
