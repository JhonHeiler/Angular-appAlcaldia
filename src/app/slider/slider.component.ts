import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
      {
        image: "/assets/imagenes/12.jpg",
        thumbImage: "/assets/imagenes/12.jpg",
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: "/assets/imagenes/12.jpg",
        thumbImage: "/assets/imagenes/12.jpg",
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: "/assets/imagenes/encuesta.jpg",
        thumbImage: "/assets/imagenes/13.jpg",
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: "/assets/imagenes/12.jpg",
        thumbImage: "/assets/imagenes/12.jpg",
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: "/assets/imagenes/encuesta.jpg",
        thumbImage: "/assets/imagenes/13.jpg",
        title: 'Image 5',
        alt: 'Image 5'
      }, {
         image: "/assets/imagenes/encuesta.jpg",
        thumbImage: "/assets/imagenes/14.png",
        title: 'Image 6',
        alt: 'Image 6'
      }
  ];

}
