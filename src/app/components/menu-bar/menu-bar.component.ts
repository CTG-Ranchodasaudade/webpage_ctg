import { Component,  HostListener,  OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {
  imagemMenu:string='../../../assets/img/Comon/menu_resp_fechado_32x32.png';
  menuFechado:boolean=true;
  openMenu:string='';
  openSubmenu:string='none';
  direcaoSubmenu:string='';
  setaLateral:string='';

  posicaoMenuSuspenso:string='';
  posicaoMenuFixo:string='';

  constructor() {

    document.addEventListener('scroll', () => {
      this.keepTrack();
    })

  }

  ngOnInit(): void {
    if(window.matchMedia('(max-width: 768px').matches) {
      this.openMenu = 'none';
      this.openSubmenu = 'none';
    }

  }

  keepTrack() {

      const element = document.getElementById('menu-bar');
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= window.pageYOffset ) {
          this.posicaoMenuSuspenso='auto';
          this.posicaoMenuFixo='relative'
        }else{
          this.posicaoMenuSuspenso='0px';
          this.posicaoMenuFixo='fixed';
        }
      } else {

      }

  }


  abreMenuHamburgue(){

    if(this.menuFechado==true){
      this.menuFechado = false
      this.imagemMenu='../../../assets/img/Comon/menu_resp_aberto_32x32.png';
      this.openMenu='flex';
    }else{
      this.menuFechado = true;
      this.imagemMenu = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';
      this.openMenu='none';
    }
    console.log(this.menuFechado);
    console.log(this.imagemMenu);
  }

  abreEFechaSubMenu(){
    if(this.openSubmenu=='none'){
      this.openSubmenu = 'flex';
      this.direcaoSubmenu = 'column';
      this.setaLateral='rotate(135deg)';
    }else{
      this.openSubmenu='none';
      this.setaLateral='rotate(45deg)';
    }
  }

  fechaSubmenu(){
    this.openSubmenu='none';
    this.setaLateral='rotate(45deg)';
    if(window.matchMedia('(max-width: 768px').matches) {
      this.openMenu='none';
      this.imagemMenu = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';
      this.menuFechado = true;
    }
  }
}

