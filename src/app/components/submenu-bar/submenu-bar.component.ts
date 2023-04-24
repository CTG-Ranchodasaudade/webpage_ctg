import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submenu-bar',
  templateUrl: './submenu-bar.component.html',
  styleUrls: ['./submenu-bar.component.css']
})
export class SubmenuBarComponent implements OnInit {

  posicaoMenuSuspenso:string='';
  posicaoMenuFixo:string='';

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  ngOnInit(): void {
  }

  keepTrack() {

    const element = document.getElementById('menu-bar');
    if (element != null) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= window.pageYOffset ) {
        this.posicaoMenuSuspenso='auto';
        this.posicaoMenuFixo='relative'
      }else{
        this.posicaoMenuSuspenso='50px';
        this.posicaoMenuFixo='fixed';
      }
    } else {

    }

}

}
