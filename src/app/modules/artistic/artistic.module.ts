import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisticComponent } from '../../pages/artistic/artistic.component';
import { CampeiraComponent } from '../../pages/campeira/campeira.component';
import { CulturalComponent } from '../../pages/cultural/cultural.component';
import { HomeModule } from '../home/home.module';

import {AwardsComponent} from '../../components/awards/awards.component';
import {CoordinationComponent} from '../../components/coordination/coordination.component';
import {PhotosGalleryComponent} from '../../components/photos-gallery/photos-gallery.component';
import {SubmenuBarComponent} from '../../components/submenu-bar/submenu-bar.component';

import {AboutModule} from '../about/about.module';

import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [
    ArtisticComponent,
    CampeiraComponent,
    CulturalComponent,
     AwardsComponent,
     CoordinationComponent,
     PhotosGalleryComponent,
     SubmenuBarComponent
  ],exports:[
    ArtisticComponent,
    CampeiraComponent,
    CulturalComponent,
    AwardsComponent,
    CoordinationComponent,
    PhotosGalleryComponent,
    SubmenuBarComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    AppRoutingModule
  ]
})
export class ArtisticModule { }
