import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  array = [
    '../../../assets/logos/angular.png',
    '../../../assets/logos/next.jpg',
    '../../../assets/logos/react.png',
    '../../../assets/logos/vue.webp',
  ];
}
