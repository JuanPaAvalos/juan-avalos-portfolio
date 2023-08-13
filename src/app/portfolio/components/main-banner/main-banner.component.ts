import { Component } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})


export class MainBannerComponent {
  public contactLinks: contactLink[]= [
    {
      alt:'juan avalos - github',
      img: 'assets/icons/github.png',
      link: 'https://github.com/JuanPaAvalos',
    },
    {
      alt:'juan avalos - Linkedin',
      img: 'assets/icons/linkedin.png',
      link: 'https://www.linkedin.com/in/juan-pablo-avalos/',
    },
    {
      alt:'juan avalos - instagram',
      img: 'assets/icons/instagram.png',
      link: 'https://www.instagram.com/juan_deitri/',
    },
  ]
}


interface contactLink {
  alt: string,
  img: string,
  link: string,
}
