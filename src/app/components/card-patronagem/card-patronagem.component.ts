import { Component, OnInit, Input } from '@angular/core';
import { dataImageAbout} from '../../data/dataImageAbout';

@Component({
  selector: 'app-card-patronagem',
  templateUrl: './card-patronagem.component.html',
  styleUrls: ['./card-patronagem.component.css']
})
export class CardPatronagemComponent implements OnInit {

  @Input()
  photoCardPatrono:string='';
  @Input()
  tituloPhotoPatrono:string='';
  @Input()
  Id:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)

  }

  setValuesToComponent(Id:string | null){
    const result = dataImageAbout.filter(
                      article => article.id == Id)[0]

    this.photoCardPatrono = result.local
    this.tituloPhotoPatrono =result.description
  }

}
