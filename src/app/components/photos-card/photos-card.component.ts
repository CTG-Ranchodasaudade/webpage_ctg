import { Component, Input, OnInit } from '@angular/core';
import {dataImageAbout} from '../../data/dataImageAbout';
import {dataInvernadas} from '../../data/dataInvernadas';

@Component({
  selector: 'app-photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.css']
})
export class PhotosCardComponent implements OnInit {
  @Input()
  photoCard:string='';
  @Input()
  tituloPhoto:string='';
  @Input()
  Id:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)

  }

  setValuesToComponent(Id:string | null){
    const result = dataImageAbout.filter(
                      article => article.id == Id)[0]

    this.photoCard = result.local
    this.tituloPhoto =result.description
  }

}
