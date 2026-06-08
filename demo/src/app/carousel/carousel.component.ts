import { Component } from '@angular/core';
import Carousel from 'bootstrap/js/dist/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  carouselItems = [
    {
      image: '../../assets/image/carousel-1.jpg',
      title: 'First Slide', 
    description: 'This is the first slide of the carousel.'
    },
    {
      image: '../../assets/image/carousel-2.jpg',
      title: 'Second Slide', 
    description: 'This is the first slide of the carousel.'
    }
  ];
  previousSlide() {
    const carouselElement = document.querySelector('#dynamicCarousel') as HTMLElement;
    const carousel = new Carousel(carouselElement);
    carousel.prev();
  }
  
  nextSlide() {
    const carouselElement = document.querySelector('#dynamicCarousel') as HTMLElement;
    const carousel = new Carousel(carouselElement);
    carousel.next();
  }
  

}
