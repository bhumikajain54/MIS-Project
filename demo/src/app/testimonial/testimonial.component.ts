import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {
  carouselItems = [
    { images: '../../assets/image/testimonial-1.jpg',title: 'Client Name', text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.' , prof:'Doctor'},
    { images: '../../assets/image/testimonial-2.jpg',title: 'Client Name1', text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',prof:'Engineer'},
    { images: '../../assets/image/testimonial-3.jpg',title: 'Client Name2', text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. ',prof:'Mechincal'}
  ];


}
