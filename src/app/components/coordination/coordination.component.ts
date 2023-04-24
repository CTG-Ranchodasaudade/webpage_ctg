import { Component, Input, OnInit } from '@angular/core';
import {dataInvernadas} from '../../data/dataInvernadas';

@Component({
  selector: 'app-coordination',
  templateUrl: './coordination.component.html',
  styleUrls: ['./coordination.component.css']
})
export class CoordinationComponent implements OnInit {

  @Input()
  imagemCordenador:string='';
  @Input()
  responsavelDepartamento:string='';
  @Input()
  nomeCoordenador:string='';
  @Input()
  IdCoordenacao:string='';
  @Input()
  pCoordenacao:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.IdCoordenacao,this.pCoordenacao)

  }

  setValuesToComponent(IdCoordenacao:string | null, pCoordenacao:string){
    const result = dataInvernadas.filter(
                      article => article.id == IdCoordenacao)[0]

   const resultCoordination = result.coordination.filter(
                      trophies => trophies.n == pCoordenacao)[0];

      this.imagemCordenador = resultCoordination.photo;
      this.responsavelDepartamento = resultCoordination.department;
      this.nomeCoordenador = resultCoordination.name;
  }

}
