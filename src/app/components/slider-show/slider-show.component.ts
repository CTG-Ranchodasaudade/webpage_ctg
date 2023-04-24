import { Component, OnInit } from '@angular/core';
import {dataImageSlider} from '../../data/dataImageSlider';

@Component({
  selector: 'app-slider-show',
  templateUrl: './slider-show.component.html',
  styleUrls: ['./slider-show.component.css','./slider-show.responsive.component.css']
})
export class SliderShowComponent implements OnInit {
  imagemSlider:string='';
  eixoHorizontal:string='';
  count:number=0;

  constructor() { }

  ngOnInit(): void {
    this.imagemSlider = "url('../../../assets/img/Home/img_slider/adulta-slide.jpg')";

    setInterval(()=>{this.count++;
      const result = dataImageSlider.filter(
        article => article.id == (this.count.toString()))[0]
        if(this.count==6){
          this.count=0;
        }
        this.imagemSlider = `url('${result.local}')`;
    },4000);

  }


 }






