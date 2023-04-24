import { Component, Input, OnInit } from '@angular/core';
import {dataInvernadas} from '../../data/dataInvernadas';

@Component({
  selector: 'app-photos-gallery',
  templateUrl: './photos-gallery.component.html',
  styleUrls: ['./photos-gallery.component.css']
})
export class PhotosGalleryComponent implements OnInit {

  @Input()
  photoGallery:string='';
  @Input()
  tituloPhoto:string='';
  @Input()
  IdGallery:string='';
  @Input()
  localePhoto:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponentArtistic(this.IdGallery,this.localePhoto)
  }

  setValuesToComponentArtistic(IdGallery:string | null,localePhoto:string | any){
    const resultado = dataInvernadas.filter(
                      section => section.id == IdGallery)[0]

    const resultGalleryDep = resultado.photos.filter(
                      photos => photos.f == localePhoto)[0];

      this.photoGallery = resultGalleryDep.photo;
      this.tituloPhoto = resultGalleryDep.description;
  }

}
