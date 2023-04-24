import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArtisticComponent } from './pages/artistic/artistic.component';
import {CampeiraComponent} from '../app/pages/campeira/campeira.component';
import {CulturalComponent} from '../app/pages/cultural/cultural.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'artistic',
    component: ArtisticComponent
  },
  {
    path: 'campeira',
    component:CampeiraComponent
  },
  {
    path: 'cultural',
    component: CulturalComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
